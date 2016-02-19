var fs = require('fs');
var assert = require('assert');
var converter = require('../index.js');

describe("parser", function (done) {
  it("should render paragraphs and headers", function (done) {
    fs.readFile('test/input/single_lines.txt', 'utf8',function(err, input){
      fs.readFile('test/output/single_lines.html', 'utf8',function(err, output){
        assert.equal(converter(input)+'\n',output);
        done();
      });
    });
  });
});
