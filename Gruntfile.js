module.exports = function(grunt){
  grunt.initConfig({
    concat: {
      // concat task configuration goes here.
      'dist/requirejs.js': ['scripts/*.js']
    },
    uglify: {
      // uglify task configuration goes here.
      'dist/require.min.js': ['dist/requirejs.js']
    },
    jshint: {
      files: ['Gruntfile.js', 'scripts/*.js']
    },
    watch: {
      files: ['Gruntfile.js', 'scripts/*.js'],
      tasks: ['jshint', 'concat', 'uglify']
    },
  });

  // Load our plugins
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Register default task
  grunt.registerTask('default', ['jshint', 'concat', 'uglify']);
};
