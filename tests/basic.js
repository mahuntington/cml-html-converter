var converter = require('../index.js');
var fs = require('fs');
fs.readFile('basic.txt', 'utf8',function(err, data){
	console.log(converter(data));
});
