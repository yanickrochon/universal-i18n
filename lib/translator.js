
const MESSAGE_FILES_GLOB = '**/*';
const DEFAULT_TOKEN_PATTERN = /\{\{([\w.]+)\}\}/g;

const path = require('path');
const glob = require('glob');
const merge = require('merge');

const C = require('./const');
const plurals = require('./plurals');



module.exports = module.exports.Translator = Translator;

Translator.DEFAULT_TOKEN_PATTERN = DEFAULT_TOKEN_PATTERN;


/**
Create a new Translator

Options
- defaultGender {string}   the default gender to use. If not specified, use neutral
- defaultLocale {string}   the default locale to use, If not specified, use english
*/
function Translator(options) {
  var basePath = process.cwd();
  var defaultLocale = C.DEFAULT_LOCALE;
  var tokenPattern = DEFAULT_TOKEN_PATTERN;

  if (!(this instanceof Translator)) {
    return new Translator(options);
  }

  Object.defineProperties(this, {
    '_loaders': {
      enumerable: false,
      configurable: false,
      writable: false,
      value: []
    },
    '_messages': {
      enumerable: false,
      configurable: false,
      writable: false,
      value: {}
    },
    'basePath': {
      enumerable: false,
      configurable: false,
      get: function getBasePath() {
        return basePath;
      }
    },
    'defaultLocale': {
      enumerable: true,
      configurable: false,
      get: function getDefaultLocale() {
        return defaultLocale;
      },
      set: function setDefaultLocale(locale) {
        if (typeof locale !== 'string') {
          throw new TypeError('Locale should be a string');
        }

        locale = locale.toLocaleLowerCase();

        if (locale in plurals) {
          defaultLocale = locale;
        } else {
          throw new Error('Unknown locale : ' + locale);
        }
      }
    },
    'tokenPattern': {
      enumerable: true,
      configurable: false,
      get: function getTokenPattern() {
        return tokenPattern;
      },
      set: function setTokenPattern(pattern) {
        if (pattern instanceof RegExp) {
          tokenPattern = pattern;

          // warn about this??
          //if (!tokenPattern.global) console.warn('Regular expression is not global');

        } else if (typeof pattern === 'string') {
          tokenPattern = new RegExp(pattern, 'g');
        } else {
          throw new TypeError('Invalid token pattern');
        }
      }
    }
  });

  options = options || {};

  if ('loaders' in options) {
    if (!Array.isArray(options['loaders'])) {
      throw new TypeError('Invalid loaders array');
    }

    options['loaders'].forEach(function (loader) {
      if (typeof loader === 'string') {
        loader = require('./loaders/' + loader);
      } else if (typeof loader !== 'function') {
        throw new TypeError('Invalid message loader');
      }

      this._loaders.push(loader);
    }.bind(this));
  } else {
    this._loaders.push(require('./loaders/json'));
  }
  if ('defaultLocale' in options) {
    this.defaultLocale = options['defaultLocale'];
  }
  if ('tokenPattern' in options) {
    this.tokenPattern = options['tokenPattern'];
  }
  if ('basePath' in options) {
    if (typeof options['basePath'] === 'string') {
      basePath = path.resolve(basePath, options['basePath']);
    } else {
      throw new TypeError('Base path should be a string');
    }
  }

  Object.freeze(this._loaders);
}


/**
Load all the given localized messages from te specified path. The
file name will determine the messages locale. All messages will be
merged unto any existing locale. Duplicated keys will override any
previous message (i.e. messages won't be merged with previous message
values).

@param messagesPath {string}   an absolute path or a relative to the current working directory
@return {Promise}              will resolve with an array of loaded locales, ore reject with an error
*/
Translator.prototype.loadMessages = function loadMessages(messagesPath) {
  var globOptions = {
    cwd: path.resolve(this.basePath, messagesPath),
    silent: true,
    nodir: true,
    realpath: true
  };
  var loaders = this._loaders;
  var messages = this._messages;

  return new Promise(function (resolve, reject) {
    glob(MESSAGE_FILES_GLOB, globOptions, function (err, files) {
      if (err) {
        reject(err);
      } else {

        Promise.all(files.map(function (file) {
          var locale = matchLocaleFromFile(file);

          if (locale) {
            return loaders.reduce(function (p, loader) {
              return p.then(function (localeMessages) {
                if (!localeMessages) {
                  return loader(file);
                } else {
                  return localeMessages;
                }
              }).catch(function () {
                return false;
              });
            }, Promise.resolve()).then(function (localeMessages) {
              if (localeMessages) {
                if (!messages[locale]) {
                  messages[locale] = {};
                }

                merge.recursive(messages[locale], localeMessages);

                return locale;
              }
            });
          }

        })).then(function (locales) {
          resolve(locales.sort().filter(function (locale, pos, all) {
            return locale && (!pos || locale !== all[pos - 1]);
          }));
        }).catch(function (err) {
          reject(err);
        });

      }
    });
  });
}


/**
Translate the given message

Options
- locale {string}     the locale to use. If not specified, use default locale
- gender {string}     specify the gender to use. If not specified, use default gender
- plurality {number}  specify a plurality value. If NaN, plurality will be 0.
- data {object}       data mapping for message token replacement. Toekn replacement
                      is performed after message lookup and before returning.

@param msgId {string}
@param options {object}
@return {string}
*/
Translator.prototype.translate = function translate(msgId, options) {
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

  if (typeof msgId !== 'string') {
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

  message = localeMessages && localeMessages[msgId]

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

      if (!validateGender(gender)) {
        // warn about this??
        gender = C.GENDER_NEUTRAL;
      }

      message = message[gender] || message[C.GENDER_NEUTRAL];

      if (message && typeof message === 'object') {
        message = null;
      }
    }
  }

  return String(message || msgId).replace(this.tokenPattern, function (m, token) {
    return token.split('.').reduce(function (value, prop) {
      return value && (prop in value) ? value[prop] : null;
    }, options && options.data || {}) || (token + '?');
  });
}




function validateGender(gender) {
  return gender === C.GENDER_MALE || gender === C.GENDER_FEMALE || gender === C.GENDER_NEUTRAL;
}



function matchLocaleFromFile(file) {
  return path.basename(file).replace(path.extname(file), '');
}