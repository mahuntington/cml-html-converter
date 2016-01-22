#!/usr/bin/env node
fs = require('fs');

var insertTabs = function(num_tabs) {
	var result = '';
	for(var i  = 0; i < num_tabs; i++){
		result += '\t';
	}
	return result;
}

var emptyTabStack = function(tabStack){
	var result = '';
	while(tabStack.length > 0){
		result += tabStack.pop();
	}
	return result;
}
var popTabStack = function(tabStack, current_line_num_tabs, previous_line_num_tabs){
	var result = '';
	for(var i = previous_line_num_tabs; i > current_line_num_tabs; i--){
		result += tabStack.pop();
	}
	return result;
}

var parseFile = function(data, callback){
	var previous_line = -1;
	var lines = data.split('\n');
	var html = '';
	var tabStack = [];
	lines.forEach(function(value, index){
		if(value !== ''){
			var split_value = value.split('\t');
			var num_tabs = split_value.length - 1;
			if(num_tabs > previous_line){
				html += '\n' + insertTabs(num_tabs * 2) +'<li>\n' + insertTabs(num_tabs * 2 + 1) + '<ul>';
				tabStack.push('\n' + insertTabs(num_tabs * 2 + 1) + '</ul>\n' + insertTabs(num_tabs * 2) + '</li>');
			}
			else if(num_tabs < previous_line){
				html += popTabStack(tabStack, num_tabs, previous_line);
			}
			html += '\n' + insertTabs(num_tabs * 2 + 2) + 
				'<li>' + split_value[split_value.length - 1] + '</li>';
			previous_line = num_tabs;
		}
	});
	html += emptyTabStack(tabStack);
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
