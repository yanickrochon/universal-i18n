
const MESSAGE_PATTERN = '**/*.{js,json}';

const GENDER_MALE = 'm';
const GENDER_FEMALE = 'f';
const GENDER_NEUTRAL = '*';

const DEFAULT_LOCALE = 'en';

const glob = require('glob');


module.exports = module.exports.Translator = Translator;



/**
Create a new Translator

Options
- defaultGender {string}   the default gender to use. If not specified, use neutral
- defaultLocale {string}   the default locale to use, If not specified, use english
*/
function Translator(options) {
  if (!(this instanceof Translator)) {
    return new Translator(options);
  }

  this.options = options || {};

  // TODO test options

  Object.defineProperty(this, '_messages', {
    enumerable: false,
    configurable: false,
    writable: false,
    value: {}
  });
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
  return new Promise(function (resolve, reject) {

    // TODO

    resolve();
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

@param message {string}
@param options {object}
@return {string}
*/
Translator.prototype.translate = function translate(message, options) {
  return message;
}