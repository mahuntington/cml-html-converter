var fs = require('fs');
var converter = require('../index.js');

describe("links", function () {
  it("should render links", function (done) {
    fs.readFile('tests/input/links.txt', 'utf8',function(err, input){
      fs.readFile('tests/output/links.html', 'utf8',function(err, output){
        expect(converter(input)+'\n').toBe(output);
        done();
      });
    });
  });
});
describe("lists", function () {
  it("should render lists", function (done) {
    fs.readFile('tests/input/lists.txt', 'utf8',function(err, input){
      fs.readFile('tests/output/lists.html', 'utf8',function(err, output){
        expect(converter(input)+'\n').toBe(output);
        done();
      });
    });
  });
});
describe("single lines", function (done) {
  it("should render paragraphs and headers", function (done) {
    fs.readFile('tests/input/single_lines.txt', 'utf8',function(err, input){
      fs.readFile('tests/output/single_lines.html', 'utf8',function(err, output){
        expect(converter(input)+'\n').toBe(output);
        done();
      });
    });
  });
});
