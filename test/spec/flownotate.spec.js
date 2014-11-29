var should = require('should'); // https://github.com/shouldjs/should.js#assertions
var fs = require('fs');
var flownotate = require('../../src/flownotate');

function getFixture(name) {
    return fs.readFileSync(__dirname + '/../fixtures/' + name, 'utf8');
}

describe('flownotate', function() {

    describe('jsToJsx()', function() {

        it('transforms a function\'s return type', function() {
            var input = getFixture('function-return-type-only.js');
            var expectedOutput = getFixture('function-return-type-only.ts');
            var actualOutput = flownotate.jsToJsx(input);
            actualOutput.should.equal(expectedOutput);
        });

        it('transforms a function\'s argument types', function() {
            var input = getFixture('function-argument-types-only.js');
            var expectedOutput = getFixture('function-argument-types-only.ts');
            var actualOutput = flownotate.jsToJsx(input);
            actualOutput.should.equal(expectedOutput);
        });

        it('transforms a function\'s argument AND return types', function() {
            var input = getFixture('function-argument-and-return-types.js');
            var expectedOutput = getFixture('function-argument-and-return-types.ts');
            var actualOutput = flownotate.jsToJsx(input);
            actualOutput.should.equal(expectedOutput);
        });

        it('leaves already-transformed source untouched', function() {
            var input = getFixture('transform-stability.js');
            var expectedOutput = getFixture('transform-stability.ts');
            var actualOutput = flownotate.jsToJsx(input);
            actualOutput.should.equal(expectedOutput);
        });

        it('return-module-object', function() {
            var input = getFixture('return-module-object.js');
            var expectedOutput = getFixture('return-module-object.ts');
            var actualOutput = flownotate.jsToJsx(input);
            actualOutput.should.equal(expectedOutput);
        });

    });

});
