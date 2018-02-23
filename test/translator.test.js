
describe('Test Translator', () => {

  const C = require('../lib/const');
  const Translator = require('../lib/translator');


  it('should load with default options', () => {
    var t = new Translator();

    expect( t._messages ).toEqual( {} );
    expect( t.getDefaultLocale() ).toEqual( C.DEFAULT_LOCALE );
    expect( t.getTokenPattern() ).toEqual( Translator.DEFAULT_TOKEN_PATTERN );
  });


  return;
  describe('Loaders', function () {

    it('should not allow modifying loaders', function () {
      var t = new Translator();

      (function () { t._loaders.push('foo'); }).should.throw();
    });

    it('should allow creating translator with no loader', function () {
      var t = Translator({
        loaders: []
      });

      t._loaders.should.be.empty;
    });

    it('should allow specifying custom loader', function () {
      var t = Translator({
        loaders: [
          function () { return {}; }
        ]
      });

      t._loaders.should.have.lengthOf(1);
    });

    it('should allow specifying loader', function () {
      var t = Translator({
        loaders: ['json']
      });

      t._loaders.should.eql([ require('../lib/loaders/json') ]);
    });

    it('should fail if not an array', function () {
      [
        undefined, null, false, true,
        NaN, Infinity, -1, 0, 1,
        '', 'foo', {}, function () {}, /./
      ].forEach(function (loaders) {
        (function () { Translator({ loaders: loaders }); }).should.throw();
      });
    });

    it('should not allow replacing property', function () {
      var t = Translator();

      (function () {'use strict'; t._loaders = []; }).should.throw();
    })

  });


  describe('Base path', function () {

    it('should not allow modifying base path');

    it('should allow specifying custom base path from constructor');

    it('should fail if not a string');

  });


  describe('Default locale', function () {

    it('should allow setting custom locales', function () {
      var t1 = Translator();
      var t2 = Translator({ defaultLocale: 'fr' });

      t1.defaultLocale.should.not.equal(t2.defaultLocale);
    });

    it('should ignore case', function () {
      var t = Translator({ defaultLocale: 'FR' });

      t.defaultLocale.should.equal('fr');
    });

    it('should fail setting unknown locale', function () {
      (function () { Translator({ defaultLocale: 'abcdef' }); }).should.throw();
    });

    it('should fail setting invalid locale', function () {
      [
        undefined, null, false, true,
        NaN, Infinity, -1, 0, 1,
        '', {}, function () {}, /./
      ].forEach(function (locale) {
        (function () { Translator({ defaultLocale: locale }); }).should.throw();
      });
    });

  });


  describe('Translate Messages', function () {
    const localeMessages = {
      // simple string message
      "Hello world!": "Bonjour monde!",

      // simple plurality
      "You have {{messages.length}} messages": {
        "zero": "Vous n'avez aucun message",
        "one": "Vous avez un message",
        "other": "Vous avez {{messages.length}} messages"
      },

      // simple gender (no plurality)
      "{{name}} is a child": {
        "other": {
          "m": "{{name}} est un garçon",
          "f": "{{name}} est une fille",
          "n": "{{name}} est un enfant"
        }
      },

      // gender with pluraity
      // NOTE : some languages will fallback to "other" when missing plurality
      "has {{n}} children": {
        "zero": {
          "m": "n'a aucun garçon",
          "f": "n'a aucune fille",
          "n": "n'a aucun enfant"
        },
        "one": {
          "m": "a un garçon",
          "f": "a une fille",
          "n": "a un enfant"
        },
        "other": {
          "m": "a {{n}} garçons",
          "f": "a {{n}} filles",
          "n": "a {{n}} enfants"
        }
      }
    };
    var data = {
      messages: ['Msg 1', 'Msg 2', 'Msg 3', 'Msg 4', 'Msg 5', 'Msg 6', 'Msg 7', 'Msg 8', 'Msg 9', 'Msg 10']
    }
    var t;

    before(function () {
      t = Translator({ defaultLocale: 'fr' });
      t._messages['fr'] = localeMessages;
      t._messages['ar'] = localeMessages;
    })


    it('should translate basic', function () {
      t.translate('Hello world!').should.equal('Bonjour monde!');
      t.translate('Hello world!', 'en').should.equal('Hello world!');
    });

    it('should translate plurals', function () {
      // default - fr
      t.translate('You have {{messages.length}} messages', { plurality: 0 }).should.equal("Vous avez un message");
      t.translate('You have {{messages.length}} messages', { plurality: 1 }).should.equal("Vous avez un message");
      t.translate('You have {{messages.length}} messages', { plurality: 10, data: data }).should.equal("Vous avez 10 messages");

      // custon - en
      t.translate('You have {{messages.length}} messages', { locale: 'ar', plurality: 0 }).should.equal("Vous n'avez aucun message");
      t.translate('You have {{messages.length}} messages', { locale: 'ar', plurality: 1 }).should.equal("Vous avez un message");
      t.translate('You have {{messages.length}} messages', { locale: 'ar', plurality: 10, data: data }).should.equal("Vous avez 10 messages");

      // plurality as a string - fr
      t.translate('You have {{messages.length}} messages', { plurality: 'messages.length', data: data }).should.equal("Vous avez 10 messages");

      // missing plurality - ar
      t.translate('You have {{messages.length}} messages', { locale: 'ar', plurality: 'foo.bar', data: data }).should.equal("Vous avez 10 messages");

      // missing data - ar
      t.translate('You have {{messages.length}} messages', { locale: 'ar', plurality: 'foo.bar' }).should.equal("Vous avez messages.length? messages");

      // invalid plurality - fr
      t.translate('You have {{messages.length}} messages', { plurality: {} }).should.equal("Vous avez messages.length? messages");
    });

    it('should translate gender');

  });


  describe('Loading messages', function () {

    const join = require('path').join;
    const messagePath = join(__dirname, '..', 'fixtures', 'lc_messages');

    it('should load from path', function (done) {
      var t = Translator();

      t.loadMessages(messagePath).then(function (locales) {
        locales.should.eql(['en', 'es', 'fr']);

        t.translate('Hello world', 'en').should.equal('Hello world');
        t.translate('Hello world', 'fr').should.equal('Bonjour monde');
        t.translate('Hello world', 'es').should.equal('Hola mundo');

        t.translate('test', 'en').should.equal('en');
        t.translate('test', 'es').should.equal('es');
        t.translate('test', 'fr').should.equal('fr');

        done();
      }).catch(done);

    });

  });


});
