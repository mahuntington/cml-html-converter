var fs = require('fs');
var converter = require('../index.js');

describe("parser", function (done) {
  it("should render paragraphs and headers", function (done) {
    fs.readFile('tests/input/single_lines.txt', 'utf8',function(err, input){
      fs.readFile('tests/output/single_lines.html', 'utf8',function(err, output){
        expect(converter(input)+'\n').toBe(output);
        done();
      });
    });
  });
});
