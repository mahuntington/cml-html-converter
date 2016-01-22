#!/usr/bin/env node
fs = require('fs');

var parseFile = function(data){
	console.log(data);
}
fs.readFile(process.argv[2], 'utf8', function(err, data){
	if(err){
		console.log(err);
	} else {
		parseFile(data);
	}
});
