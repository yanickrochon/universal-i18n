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
const localeMap = require('cldr-data').availableLocales.reduce(function (map, locale) {
  map[locale.toLowerCase()] = locale.split('-')[0];

  return map;
}, {});

/**
rule[locale] => { cardinal: function, ordinal: function }
*/
var rules = {};
var fnDefs = {};
var plurals;
var content = [
  '/**',
  'Plural file generated from CLDR-DATA (http://www.unicode.org/cldr/charts/latest/supplemental/language_plural_rules.html)',
  'See ../build_plurals.js for more information.',
  '**/',
  "const C = require('./const');"
];

/**
Build all cardinal rules from CLDR data
*/
scanPluralData(require('cldr-data/supplemental/plurals')['supplemental']['plurals-type-cardinal'], 'cardinal');
/**
Build all ordinal rules from CLDR data
*/
scanPluralData(require('cldr-data/supplemental/ordinals')['supplemental']['plurals-type-ordinal'],'ordinal');


plurals = JSON.stringify(rules, null, 2);

Object.keys(fnDefs).forEach(function (name) {
  plurals = plurals.replace(new RegExp('"' + name + '"', 'g'), name);
});

content.push('module.exports = ' + plurals + ';');
content.push(Object.keys(fnDefs).map(function (name) { return fnDefs[name]; }).join('\n'));


fs.writeFileSync('./lib/plurals.js', content.join('\n\n'));


// --------------------------------------------------------------------


function scanPluralData(pluralData, type) {
  var ruleCount = 1;
  var _cache = {};

  Object.keys(pluralData).forEach(function (locale, index) {
    var defName = type + ruleCount;
    var expr = pluralData[locale];
    var cacheKey = JSON.stringify(expr);

    if (!rules[locale]) {
      rules[locale] = {};
    }

    if (_cache[cacheKey]) {
      rules[locale][type] = _cache[cacheKey];
    } else {
      rules[locale][type] = _cache[cacheKey] = defName;
      fnDefs[defName] = buildRule(expr, defName);

      ruleCount++;
    }
  });
}


function buildRule(cldrData, name) {
  var vars  = {
    // n = absolute value of the source number (integer and decimals)
    'n': 'Math.abs(p)||0'
  };
  var requireN = false;
  var rule = Object.keys(cldrData).map(function (key) {
    var pluralKey = key.substr(key.lastIndexOf('-') + 1);
    var expr = cldrData[key].substr(0, cldrData[key].indexOf('@')).trim()
      // http://unicode.org/reports/tr35/tr35-numbers.html#Language_Plural_Rules
      .replace('i', function () {
        requireN = true;

        // i = integer digits of p.
        vars['i'] = 'Math.floor(n,10)||0';

        return 'i';
      })
      .replace('v', function () {
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
      .replace('f', function () {
        // f = visible fractional digits in p, with trailing zeros.
        vars['f'] = 'Math.floor((p+"").split(".")[1],10)||0';

        return 'f';
      })
      .replace('t', function () {
        requireN = true;

        // t = visible fractional digits in p, without trailing zeros.
        vars['t'] = 'Math.floor((n+"").split(".")[1],10)||0';

        return 't';
      })
      .replace(MOD_ALIAS, function (match, v, mod) {
        var alias = v + mod;

        if (v === 'n') {
          requireN = true;
        }

        if (!vars[alias]) {
          vars[alias] = match;
        }

        return alias;
      })
      .replace(EXPR, function (match, v, op, n) {

        // n = 0..2,5  ==> (n === 0 || n === 1 || n === 2 || n === 5)
        // n != 0..2,5 ==> (n !== 0 && n !== 1 && n !== 2 && n !== 5)


        return n.split(',').map(function (r) {
          var m = r.match(EXPR_RANGE);
          var buffer;

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

    //console.log(pluralKey, expr);

    return expr;
  }).join(' : ');

  if (!requireN && rule.indexOf('n') === -1) {
    delete vars['n'];
  }

  vars = Object.keys(vars).map(function (v) {
    return v + ' = ' + vars[v];
  }).join(', ');

  return 'function ' + name + '(p) { ' + (vars && ('var ' + vars + '; ')) + 'return ' + rule + '; }';
}