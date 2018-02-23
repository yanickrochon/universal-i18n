const merge = require('merge');
const C = require('./const');


/**
Create a new Translator

Options
- availableLocales {Object}   the locale definitions
- defaultLocale {string}   the default locale to use, If not specified, use english
* tokenPattern {RegExp|String}   the template's tokens replacement pattern
*/
class Translator {

  constructor(options) {
    if (!(this instanceof Translator)) {
      return new Translator(options);
    }

    options = options || {};

    this._messages = {};
    this._locales = 'locales' in options ? options['locales'] : {};
    this._defaultLocale = 'defaultLocale' in options ? options['defaultLocale'] : C.DEFAULT_LOCALE;
    this._tokenPattern = 'tokenPattern' in options ? options['tokenPattern'] : C.DEFAULT_TOKEN_PATTERN;

    if (typeof this._tokenPattern === 'string') {
      this._tokenPattern = new RegExp(this._tokenPattern, 'g');
    }
  }

  getDefaultLocale() {
    return this._defaultLocale;
  }

  setDefaultLocale(locale) {
    if (locale && (typeof locale === 'string')) {
      const normLocale = locale.toLocaleLowerCase();

      if (normLocale in plurals) {
        this._defaultLocale = normLocale;
      } else {
        throw new Error('Unknown locale : ' + locale);
      }
    } else {
      throw new TypeError('Invalid locale name');
    }

    // resolve locale
  }

  /**
  Get the message parser's token pattern
  @return {String}
  */
  getTokenPattern() {
    return this._tokenPattern;
  }

  /**
  Set the message parser's token pattern
  @param pattern {RegExp|String}
  */
  setTokenPattern(pattern) {
    if (pattern instanceof RegExp) {
      // warn about this??
      //if (!tokenPattern.global) console.warn('Regular expression is not global');

      this._tokenPattern = pattern;
    } else if (pattern && (typeof pattern === 'string')) {
      this._tokenPattern = new RegExp(pattern, 'g');
    } else {
      throw new TypeError('Invalid token pattern');
    }
  }

  /**
  Add all the given messages to the specified locale
  @param locale {String}      the locale to set messages to
  @param messages {Object}    the messages object
  */
  addMessages(locale, messages) {
    if (!locale || (typeof locale !== 'string') || !(locale && plurals)) {
      throw new Error('Unknown locale : ' + locale);
    }

    const normLocale = locale.toLocaleLowerCase();

    this._messages[normLocale] = this._messages[normLocale] || {};

    merge.recursive(this._messages[normLocale], messages);
  }

  /**
  Translate the given message

  Options
  - locale {string}     the locale to use. If not specified, use default locale
  - gender {string}     specify the gender to use. If not specified, use default gender
  - plurality {number}  specify a plurality value. If NaN, plurality will be 0.
  - data {object}       data mapping for message token replacement. Toekn replacement
                        is performed after message lookup and before returning.

  @param msgKey {string}
  @param options {object}
  @return {string}
  */
  translate(msgKey, options) {
    var locale;
    var localeMessages;
    var message;
    var plurality;
    var gender;

    if (typeof options === 'string') {
      options = { locale: options };
    }

    locale = options && options.locale || this.defaultLocale;
    localeMessages = this._messages[locale];

    if (typeof msgKey !== 'string') {
      throw new TypeError('Message ID must be a string');
    }
    if (typeof locale !== 'string') {
      throw new TypeError('Invalid locale');
    } else {
      locale = locale.toLocaleLowerCase();

      if (!(locale in plurals)) {
        throw new Error('Unknown locale : ' + locale);
      }
    }

    message = localeMessages && localeMessages[msgKey]

    if (message && typeof message === 'object') {
      plurality = options && options.plurality;

      if (typeof plurality === 'string') {
        if (options && typeof options.data === 'object') {
          plurality = plurality.split('.').reduce(function (plurality, prop) {
            return plurality && plurality[prop] || null;
          }, options.data);
        }
      }

      if (typeof plurality !== 'number') {
        plurality = Infinity;
      }

      message = message[plurals[locale].cardinal(plurality)] || message[C.PLURAL_OTHER];

      if (message && typeof message === 'object') {
        gender = options && options.gender || C.GENDER_NEUTRAL;

        if ((gender !== C.GENDER_MALE) && (gender !== C.GENDER_FEMALE) && (gender !== C.GENDER_NEUTRAL)) {
          // warn about this??
          gender = C.GENDER_NEUTRAL;
        }

        message = message[gender] || message[C.GENDER_NEUTRAL];

        if (message && typeof message === 'object') {
          message = null;
        }
      }
    }

    return String(message || msgKey).replace(this.tokenPattern, function (m, token) {
      return token.split('.').reduce(function (value, prop) {
        return value && (prop in value) ? value[prop] : null;
      }, options && options.data || {}) || (token + '?');
    });
  }
}


Object.assign(Translator, C);

Translator.DEFAULT_LOCALE = {
  plural: {
    ordinal: require('../rule/defRule'),
    cardinal: require('../rule/defRule'),
  }
};


module.exports = module.exports.Translator = Translator;
