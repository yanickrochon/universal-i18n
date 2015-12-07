
describe('Test loading JSON', function () {

  const join = require('path').join;
  const loader = require('../../lib/loaders/json');

  const simpleJSON = join(__dirname, '..', '..', 'fixtures', 'loaders', 'simple.json');
  const missingJSON = join(__dirname, '..', '..', 'fixtures', 'loaders', 'missing.json');
  const malformedJSON = join(__dirname, '..', '..', 'fixtures', 'loaders', 'malformed.json');


  it('load simple file', function (done) {
    loader(simpleJSON).then(function (messages) {
      messages.should.be.instanceOf(Object);

      done();
    }).catch(done);
  });

  it('should fail when missing file', function (done) {
    loader(missingJSON).then(function (messages) {
      messages.should.not.be.instanceOf(Object);
      messages.should.be.false;

      done();
    }).catch(done);
  });

  it('should fail when malformed JSON', function (done) {
    loader(malformedJSON).then(function (messages) {
      messages.should.not.be.instanceOf(Object);
      messages.should.be.false;

      done();
    }).catch(done);
  });

})