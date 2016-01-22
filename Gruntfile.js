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
		converter('test.txt', function(result){
			console.log(result);
			fs.writeFile('result.html', result, function(){
				done();
			});
		});
	});

};
