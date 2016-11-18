module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    sass: {
      dist: {
        files: [{
          expand: true,
          cwd: 'pre_css',
          src: ['*.scss'],
          dest: 'css',
          ext: '.css'
        }],
      },
    },
    jshint: {
      files: ["scripts/*.js"],
    },
    concat: {
      js: {
        src: ["scripts/*.js"],
        dest: "dist/<%= pkg.name %>.js"
      },
      options: {
        // Task-level options may go here, overriding task defaults.
      },
    },
    "connect": {
      keepalive: {
        options: {
          port: 8989,
          host: "*",
          livereload: true,
          open: "http://localhost:8989/html/main.html"
        }
      }
    },
    "watch": {
      "build": {
        files: ["scripts/main.js", "html/*.html", "css/*.css"],
        options: {
          livereload: true
        }
      },
      files: ["scripts/*.js", "Gruntfile.js", "pre_css/*.scss"],
      tasks:  ["jshint", "sass", "concat"]
    },
  });


  //
  // Register modules
  //
  grunt.loadNpmTasks("grunt-contrib-connect");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-concurrent");
  grunt.loadNpmTasks("grunt-browserify");
  grunt.loadNpmTasks("grunt-contrib-jshint");
  grunt.loadNpmTasks("grunt-contrib-concat");
  //grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-contrib-sass");


  //
  // Register tasks
  //
  grunt.registerTask("default", ["connect", "watch"]);
  grunt.registerTask("build", ["jshint", "sass", "concat"]);
};


