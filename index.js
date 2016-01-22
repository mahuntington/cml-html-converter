#!/usr/bin/env node
fs = require('fs');


var parseFile = function(data, callback){
	var previous_line = -1;
	var lines = data.split('\n');
	var html = '';
	lines.forEach(function(value, index){
		if(value !== ''){
			var split_value = value.split('\t');
			var num_tabs = split_value.length - 1;
			if(num_tabs > previous_line){
				html += "<ul>";
			}
			html += '<li>' + split_value[split_value.length-1] + '</li>';
			previous_line = num_tabs;
		}
	});
	callback(html);
}

fs.readFile(process.argv[2], 'utf8', function(err, data){
	if(err){
		console.log(err);
	} else {
		parseFile(data, function(html){
			console.log(html);
		});
	}
});
