var fs = require('fs');
var assert = require('assert');
var converter = require('../index.js');

describe("parser", function () {
  it("should render links in a list", function (done) {
    fs.readFile('test/input/links/list.txt', 'utf8',function(err, input){
      fs.readFile('test/output/links/list.html', 'utf8',function(err, output){
        assert.equal(converter(input)+'\n',output);
        done();
      });
    });
  });
  it("should render links in a paragraph", function (done) {
    fs.readFile('test/input/links/paragraph.txt', 'utf8',function(err, input){
      fs.readFile('test/output/links/paragraph.html', 'utf8',function(err, output){
        assert.equal(converter(input)+'\n',output);
        done();
      });
    });
  });
});
