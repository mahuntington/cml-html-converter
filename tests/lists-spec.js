var fs = require('fs');
var converter = require('../index.js');

describe("parser", function () {
  it("should render lists", function (done) {
    fs.readFile('tests/input/lists.txt', 'utf8',function(err, input){
      fs.readFile('tests/output/lists.html', 'utf8',function(err, output){
        expect(converter(input)+'\n').toBe(output);
        done();
      });
    });
  });
});
