var fs = require('fs');
var converter = require('../index.js');

describe("links", function () {
  it("should multiply render links", function (done) {
    fs.readFile('tests/links.txt', 'utf8',function(err, input){
      fs.readFile('tests/output/links.html', 'utf8',function(err, output){
        expect(converter(input)+'\n').toBe(output);
        done();
      });
    });
  });
});
