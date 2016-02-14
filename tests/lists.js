var converter = require('../index.js');
var fs = require('fs');
fs.readFile('lists.txt', 'utf8',function(err, data){
	console.log(converter(data));
});
