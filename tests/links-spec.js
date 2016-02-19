var fs = require('fs');
var converter = require('../index.js');

describe("parser", function () {
  it("should render links in a list", function (done) {
    fs.readFile('tests/input/links/list.txt', 'utf8',function(err, input){
      fs.readFile('tests/output/links/list.html', 'utf8',function(err, output){
        expect(converter(input)+'\n').toBe(output);
        done();
      });
    });
  });
  it("should render links in a paragraph", function (done) {
    fs.readFile('tests/input/links/paragraph.txt', 'utf8',function(err, input){
      fs.readFile('tests/output/links/paragraph.html', 'utf8',function(err, output){
        expect(converter(input)+'\n').toBe(output);
        done();
      });
    });
  });
});
