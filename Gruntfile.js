var converter = require('./index.js');
var fs = require('fs');
module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		watch: {
			options: {
				livereload: {
					port: 35729
				}
			},
			all: {
				files: ['**/*.txt'],
				tasks: ['convert-tabs-to-html']
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default', ['watch']);
	grunt.registerTask('convert-tabs-to-html', function(){
		var done = this.async();
		fs.readFile('test.txt', 'utf8', function(err, data){
			var html = '<html><head></head><body>\n';
			html += converter(data);
			html += '</body></html>';
			fs.writeFile('result.html', html, function(){
				done();
			});
		});
	});

};
