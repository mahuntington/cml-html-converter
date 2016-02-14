var converter = require('../index.js');
var fs = require('fs');
fs.readFile('single_lines.txt', 'utf8',function(err, data){
	console.log(converter(data));
});
