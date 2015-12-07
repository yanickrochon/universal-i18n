# Universal i18n

[![Build Status](https://travis-ci.org/yanickrochon/universal-i18n.svg)](https://travis-ci.org/yanickrochon/universal-i18n)
[![Coverage Status](https://coveralls.io/repos/yanickrochon/universal-i18n/badge.svg?branch=master&service=github)](https://coveralls.io/github/yanickrochon/universal-i18n?branch=master)

Universal localization toolkit


## Install

```
npm install universal-i18n --save
```


## Usage

```javascript
const i18n = require('universal-i18n');

var i18nOptions = {
  defaultLocale: 'fr'
};
var translator = i18n.Translator(i18nOptions);

translator.loadMessages('path/to/lc_messages').then(function (locales) {
  // locales is an array of found and loaded locales from the given path
  //  ex: ['en', 'fr', 'es']

  // --[fr.json]--
  // {
  //   "Hello world!": "Bonjour monde!"
  // }
  translator.translate('Hello world!');
  // -> "Bonjour monde!"

  // --[es.json]--
  // {
  //   "Hello world!": "¡Hola Mundo!"
  // }
  translator.translate('Hello world!', 'es');
  // -> "¡Hola Mundo!"

  translator.translate('Hello world!', { locale: 'es' });
  // -> "¡Hola Mundo!"

  // see plurals for more info
  // --[en.json]--
  // {
  //   "You have {{n}} messages": {
  //     "zero": "You have no messages",
  //     "one": "You have 1 message",
  //     "other": "You have {{n}} messages"
  //   }
  // }
  translator.translate('You have {{n}} messages', {
    locale: 'en',
    plurality: 0     // numerical values for pluraity
  });
  // -> "You have no messages"

  translator.translate('You have {{n}} messages', {
    locale: 'en',
    plurality: 'messages.length',  // data property value for plurality
    data: { messages: [ "Hello!" ] }
  });
  // -> "You have 1 message"
  
  // see gender for more info
  // --[fr.json]--
  // {
  //   "{{name}} is a child": {
  //     "other": {
  //       "m": "{{name}} est un garçon",
  //       "f": "{{name}} est une fille",
  //       "n": "{{name}} est un enfant"
  //     }
  //   }
  // }
  translator.translate('{{name}} is a child', {
    gender: 'f',
    data: { name: 'Jenn' }
  });
  // -> "Jenn est une fille"

}).catch(function (error) {
  console.error('i18n:ERR!', error.message);
});
```


### Plural Rules

Plural rules follow the guideline found in the Unicode CLDR Charts on [Language Plural Rules](http://www.unicode.org/cldr/charts/latest/supplemental/language_plural_rules.html). Thiss standard is also respected by [gettext](http://www.gnu.org/software/gettext/) and by [Mozilla](https://developer.mozilla.org/en/docs/Localization_and_Plurals).

However, because this module exposes the messages contained in a locale catalog, the plurality indexes are converted into human-readable object properties. The benefit of using objects over arrays (as for gettext) allows unused plural forms to be omitted without having unnecessary data in memory.

Also, an important information to know is that the actual "meaning" of every property is language dependant! For example, some languages do not qualify certain quantities in the same plural forms as other languages.

* `'zero'` : Depending on the language; where there's nothing.
* `'one'` : Depending on the language; where there's an unicity in number.
* `'two'` : Depending on the language; where there's a pair.
* `'few'` : Depending on the language; where there's a small amount.
* `'many'` : Depending on the language; where there's a fairly large amount.
* `'other'` *(default)* : Any other specification goes here. This is the default langauge key; where we may find fractions, negative or otherwise unspecified or very large numbers. For any translation, this should always be specified at all times. This is also the fallback translation in case other language keys or not defined.

**Note**: see `lib/const.js` for more constants, also accessible via `i18n.PLURAL_*`.

**Note**: gettext make use of translations like this :

```text
msgid "One file removed"
msgid_plural "%d files removed"
msgstr[0] "%d slika je uklonjena"
msgstr[1] "%d datoteke uklonjenih"
msgstr[2] "%d slika uklonjenih"
```

which is not necessary. In your application, if using plurality, only provide the plural form to translate (`msgid_plural`). If the `msgid` does not exist in the translator, it's not a bigger deal to display a plural string for a singular count than printing the wrong plural form anyway in certain locales.

Naturally, messages are not required to have a plural form, and may very well be specified as a `string` (like in the examples above). Plural forms and non plural forms may be mixed for any given translation messages.


### Gender Form

When supported, messages can specify different translation gender. In order to use gender forms, they should be specified inside a plural rule. If no plural rule applies, use the `"other"` rule. For example :

```json
{
  "Restroom": {
    "other": {
      "m": "Gentlemen's Restroom",
      "f": "Ladies' Restroom",
      "n": "Restroom"
    }
  }
}
```

When translating and specifying a gender, if the specified gender is not `"neutral"` and does not exist, the `"neutral"` gender will be retrieved. If no `"neutral"` gender exists, the message itself is processed and returned as no adequate translation value was found.


## Contribution

All contributions welcome! Every PR **must** be accompanied by their associated
unit tests!


## License

The MIT License (MIT)

Copyright (c) 2015 Mind2Soft <yanick.rochon@mind2soft.com>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.