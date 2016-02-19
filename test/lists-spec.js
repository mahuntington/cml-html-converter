var fs = require('fs');
var assert = require('assert');
var converter = require('../index.js');

describe("parser", function () {
  it("should render lists", function (done) {
    fs.readFile('test/input/lists.txt', 'utf8',function(err, input){
      fs.readFile('test/output/lists.html', 'utf8',function(err, output){
        assert.equal(converter(input)+'\n',output);
        done();
      });
    });
  });
});
