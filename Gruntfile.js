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
				files: ['**/*'],
				tasks: []
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default', ['watch']);

};
