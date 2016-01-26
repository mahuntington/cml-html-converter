module.exports = function(input){

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

	var parseFile = function(data){
		var previous_line_num_tabs = -1;
		var lines = data.split('\n');
		var html = '';
		for(var i = 0; i < lines.length; i++){
			if(lines[i] !== ''){
				if(lines[ i + 1 ] === '' && (i === 0 || lines[ i - 1 ] === '')){
					html += popHTMLStack(-1, previous_line_num_tabs); 
					previous_line_num_tabs = -1;
					if( i > 0 ) {
						html += '<h2>' + lines[i] + '</h2>\n';
					} else {
						html += '<h1>' + lines[i] + '</h1>\n';
					}
				} else {
					var tabs_array = lines[i].split('\t');
					var current_line_num_tabs = tabs_array.length - 1;
					if(current_line_num_tabs > previous_line_num_tabs){
						html += insertTabs(current_line_num_tabs * 2) + '<ul>\n';
						html_stack.push(insertTabs(current_line_num_tabs * 2) + '</ul>\n');
					} else { 
						html += popHTMLStack(current_line_num_tabs, previous_line_num_tabs);
					}
					html += insertTabs((current_line_num_tabs * 2) + 1) + '<li>\n';
					html += insertTabs((current_line_num_tabs * 2) + 2) + tabs_array[tabs_array.length - 1] + '\n';
					html_stack.push(insertTabs((current_line_num_tabs * 2) + 1) + '</li>\n');
					previous_line_num_tabs = current_line_num_tabs;
				}
			}
		}
		html += popHTMLStack(-1, previous_line_num_tabs); 
		previous_line_num_tabs = -1;
		return html
	}
	
	return parseFile(input);
};
