var fs = require('fs');
module.exports = function(input, callback){

	var html_stack = [];

	var insertTabs = function(num_tabs) {
		var result = '';
		for(var i  = 0; i < num_tabs; i++){
			result += '\t';
		}
		return result;
	}

	var popHTMLStack = function(current_line_num_tabs, previous_line_num_tabs){
		var result = ''; 
		for(var i = previous_line_num_tabs; i > current_line_num_tabs; i--){
			result += html_stack.pop();
			result += html_stack.pop();
		}
		if(html_stack.length > 0){
			result += html_stack.pop();
		}
		return result;
	}

	var parseFile = function(data, callback){
		var previous_line_num_tabs = -1;
		var lines = data.split('\n');
		var html = '';
		for(var i = 0; i < lines.length; i++){
			if(lines[i] !== ''){
				var tabs_array = lines[i].split('\t');
				var current_line_num_tabs = tabs_array.length - 1;
				if(current_line_num_tabs > previous_line_num_tabs){
					html += insertTabs(current_line_num_tabs * 2) + '<ul>\n';
					html_stack.push( insertTabs(current_line_num_tabs * 2) + '</ul>\n');
				} else if (current_line_num_tabs === previous_line_num_tabs) {
					html += html_stack.pop();
				}
				else if(current_line_num_tabs < previous_line_num_tabs){
					html += popHTMLStack(current_line_num_tabs, previous_line_num_tabs);
				}
				html += insertTabs((current_line_num_tabs * 2) + 1) + '<li>\n';
				html += insertTabs((current_line_num_tabs * 2) + 2) + tabs_array[tabs_array.length - 1] + '\n';
				html_stack.push(insertTabs((current_line_num_tabs * 2) + 1) + '</li>\n');
				previous_line_num_tabs = current_line_num_tabs;
			}
		}
		html += popHTMLStack(-1, previous_line_num_tabs); 
		return html
	}
	
	var result = '<html><head></head><body>\n';
	result += parseFile(input);
	result += '</body></html>';
	return result;
};
