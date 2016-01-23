var fs = require('fs');
module.exports = function(file_path, callback){

	var insertTabs = function(num_tabs) {
		var result = '';
		for(var i  = 0; i < num_tabs; i++){
			result += '\t';
		}
		return result;
	}

	var emptyHTMLStack = function(html_stack){
		var result = '';
		while(html_stack.length > 0){
			result += html_stack.pop();
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
		var previous_line_num_tabs = -1;
		var lines = data.split('\n');
		var html = '';
		var html_stack = [];
		for(var i = 0; i < lines.length; i++){
			if(lines[i] !== ''){
				console.log(i + lines[i]);
				var tabs_array = lines[i].split('\t');
				var current_line_num_tabs = tabs_array.length - 1;
				if(current_line_num_tabs > previous_line_num_tabs){
					html += insertTabs(current_line_num_tabs * 2) + '<ul>\n';
					html_stack.push( insertTabs(current_line_num_tabs * 2) + '</ul>\n');
				} else if (current_line_num_tabs === previous_line_num_tabs) {
					html += html_stack.pop();
				}
				html += insertTabs((current_line_num_tabs * 2) + 1) + '<li>\n';
				html += insertTabs((current_line_num_tabs * 2) + 2) + tabs_array[tabs_array.length - 1] + '\n';
				html_stack.push(insertTabs((current_line_num_tabs * 2) + 1) + '</li>\n');
				previous_line_num_tabs = current_line_num_tabs;
			}
		}
/*		lines.forEach(function(value, index){
			if(value !== ''){
				var split_value = value.split('\t');
				var num_tabs = split_value.length - 1;
				if(num_tabs > previous_line){
					html += '\n' + insertTabs(num_tabs * 2) + '<ul>';
					var html_push_string = '\n' + insertTabs(num_tabs * 2) + '</ul>';
					tabStack.push(html_push_string);
				}
				else if(num_tabs < previous_line){
					html += popTabStack(tabStack, num_tabs, previous_line);
				}
				html += '\n' + insertTabs(num_tabs * 2 + 1) + 
					'<li>' + split_value[split_value.length - 1] + '</li>';
				previous_line = num_tabs;
			}
		});
*/		
		html += emptyHTMLStack(html_stack);
		callback(html);
	}
	fs.readFile(file_path, 'utf8', function(err, data){
		if(err){
			console.log(err);
		} else {
			parseFile(data, function(html){
				var result = '<html><head></head><body>\n';
				result += html;
				result += '</body></html>';
				callback(result);
			});
		}
	});
};
