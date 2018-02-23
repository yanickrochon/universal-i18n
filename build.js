/**
This script is used to build lib/plurals.js

This script is part of the npm package "universal-i18n" and
should not be distributed in a non-development environment
as it depends on cldr-data to be installed as a dev-dependency.
*/

const OP_AND = / and /g;
const OP_OR = / or /g;
const OP_EQUAL = / = /g;
const OP_NOT_EQUAL = / != /g;
const MOD_ALIAS = /(\w) % (\d+)/g;
const EXPR = /(\w\d*?) (!?=) ((?:\d+(\.\.\d+)?,?)+)/g;
const EXPR_RANGE = /(\d+)\.\.(\d+)/;

const fs = require('fs');


// TODO : naïve implementation... I don't like it.
const localeMap = require('cldr-data').availableLocales.reduce((map, locale) => {
  map[locale.toLowerCase()] = locale.split('-')[0];

  return map;
}, {});

/**
rule[locale] => { cardinal: function, ordinal: function }
*/
const rulesCache = {};
const rules = {};
const fnDefs = {
  defRule: buildRule({
    'pluralRule-count-other': '@integer 1'
  }, 'defRule')
};

/**
Build all cardinal rules from CLDR data
*/
scanPluralData(require('cldr-data/supplemental/plurals')['supplemental']['plurals-type-cardinal'], 'cardinal');
/**
Build all ordinal rules from CLDR data
*/
scanPluralData(require('cldr-data/supplemental/ordinals')['supplemental']['plurals-type-ordinal'], 'ordinal');

// fix missing ordinals
Object.keys(rules).forEach(name => rules[name].plural.ordinal = rules[name].plural.ordinal || 'defRule');


// *********** WRITE FILES ***************************

if (!fs.existsSync('./locale')){
    fs.mkdirSync('./locale');
}
if (!fs.existsSync('./rule')){
    fs.mkdirSync('./rule');
}

// save rules
Object.keys(fnDefs).forEach(name => {
  const content = [
    "const C = require('../lib/const');",
    "module.exports = " + fnDefs[name] + ";"
  ].join('\n');

  fs.writeFile('./rule/' + name + '.js', content, (err) => {
    err && console.error(err);
  });
});

Object.keys(rules).forEach(locale => {
  const json = JSON.stringify(rules[locale], null, 2)
    .replace('"' + rules[locale].plural.cardinal + '"', "require('../rule/" + rules[locale].plural.cardinal + "')")
    .replace('"' + rules[locale].plural.ordinal + '"', "require('../rule/" + rules[locale].plural.ordinal + "')")
  ;
  const content = [
    "module.exports = " + json + ";"
  ].join('\n');

  fs.writeFile('./locale/' + locale + '.js', content, (err) => {
    err && console.error(err);
  });
});



// --------------------------------------------------------------------


function scanPluralData(pluralData, type) {
  let ruleCount = Object.keys(rulesCache).length + 1;

  Object.keys(pluralData).forEach((locale, index) => {
    const expr = pluralData[locale];
    const cacheKey = JSON.stringify(expr);

    if (!rules[locale]) {
      rules[locale] = {};
    }
    rules[locale].plural = rules[locale].plural || {};

    if (rulesCache[cacheKey]) {
      rules[locale].plural[type] = rulesCache[cacheKey];
    } else {
      const defName = 'rule' + ruleCount;
      const defRule = buildRule(expr, defName);
      const knownRule = Object.keys(fnDefs).find(defName => fnDefs[defName].substr(fnDefs[defName].indexOf('{')) === defRule.substr(defRule.indexOf('{')));

      // make sure we do not generate duplicate rules
      if (knownRule) {
        rules[locale].plural[type] = rulesCache[cacheKey] = knownRule;
      } else {
        fnDefs[defName] = defRule;
        rules[locale].plural[type] = rulesCache[cacheKey] = defName;

        ruleCount++;
      }

    }
  });
}


function buildRule(cldrData, name) {
  let requireN = false;
  let bodyStart = ' { ';
  let bodyEnd = ' } ';
  let varNames = [];
  let vars  = {
    // n = absolute value of the source number (integer and decimals)
    'n': 'Math.abs(p)||0'
  };
  let rule = Object.keys(cldrData).map(key => {
    const pluralKey = key.substr(key.lastIndexOf('-') + 1);
    let expr = cldrData[key].substr(0, cldrData[key].indexOf('@')).trim()
      // http://unicode.org/reports/tr35/tr35-numbers.html#Language_Plural_Rules
      .replace('i', () => {
        requireN = true;

        // i = integer digits of p.
        vars['i'] = 'Math.floor(n,10)||0';

        return 'i';
      })
      .replace('v', () => {
        // v = number of visible fraction digits in p, with trailing zeros.
        vars['v'] = '((p+"").split(".")[1]||"").length';

        return 'v';
      })
      /*
      --- NOT USED BY CLDR AT THE MOMENT ---
      .replace('w', function () {
        // w = number of visible fraction digits in p, without trailing zeros.
        vars['w'] = '((n+"").split(".")[1]||"").length';

        return 'w';
      })
      */
      .replace('f', () => {
        // f = visible fractional digits in p, with trailing zeros.
        vars['f'] = 'Math.floor((p+"").split(".")[1],10)||0';

        return 'f';
      })
      .replace('t', () => {
        requireN = true;

        // t = visible fractional digits in p, without trailing zeros.
        vars['t'] = 'Math.floor((n+"").split(".")[1],10)||0';

        return 't';
      })
      .replace(MOD_ALIAS, (match, v, mod) => {
        var alias = v + mod;

        if (v === 'n') {
          requireN = true;
        }

        if (!vars[alias]) {
          vars[alias] = match;
        }

        return alias;
      })
      .replace(EXPR, (match, v, op, n) => {

        // n = 0..2,5  ==> (n === 0 || n === 1 || n === 2 || n === 5)
        // n != 0..2,5 ==> (n !== 0 && n !== 1 && n !== 2 && n !== 5)


        return n.split(',').map(r => {
          const m = r.match(EXPR_RANGE);
          let buffer;

          if (m) {
            //for (buffer = [], m[1] = Math.floor(m[1], 10), m[2] = Math.floor(m[2], 10); m[1] <= m[2]; ++m[1]) {
            //  buffer.push(v + ' ' + op  + ' ' + m[1]);
            //}
            //return buffer.join(' || ');

            return (op === '=' ? '' : '!') + '(' + v + ' >= ' + m[1] + ' && ' + v + ' <= ' + m[2] + ')';
          } else {
            return v + ' ' + op + ' ' + r;
          }
        }).join(op === '=' ? ' || ' : ' && ');
      })
      .replace(OP_AND, ' && ')
      .replace(OP_OR, ' || ')
      .replace(OP_EQUAL, ' === ')
      .replace(OP_NOT_EQUAL, ' !== ')
    ;

    if (!expr) {
      expr = 'C.PLURAL_' + pluralKey.toUpperCase();
    } else {
      expr = expr + ' ? C.PLURAL_' + pluralKey.toUpperCase();
    }

    return expr;
  }).join(' : ');

  if (!requireN && rule.indexOf('n') === -1) {
    delete vars['n'];
  }

  varNames = Object.keys(vars);
  vars = varNames.map(v => v + ' = ' + vars[v]).join(', ') + '; ';
  varNames = varNames.length ? ('p, ' + varNames.join(', ')) : '';

  return 'function ' + name + '(' + (varNames || '') + ')' + bodyStart + (varNames ? vars : '') + 'return ' + rule + ';' + bodyEnd;
}
