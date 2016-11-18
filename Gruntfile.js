module.exports = function(grunt) {
  "use strict";

  // Force use of Unix newlines
  grunt.util.linefeed = "\n";

  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    jshint: {
      files: ["Gruntfile.js", "scripts/*.js"],
    },
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
    concat: {
      js: {
        src: ["scripts/*.js"],
        dest: "dist/<%= pkg.name %>.js"
      },
      options: {
        // Task-level options may go here, overriding task defaults.
      },
    },
    uglify: {
      js: {
        src: "dist/<%= pkg.name %>.js",
        dest: "dist/<%= pkg.name %>.min.js",
      },
    },
    cssmin: {
      css: {
        files: [{
          expand: true,
          cwd: "css",
          src: ["*.css", "!*.min.css"],
          dest: "css",
          ext: ".min.css",
        }],
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
      files: ["scripts/*.js", "Gruntfile.js", "pre_css/*.scss", "css/*.css"],
      tasks:  ["jshint", "sass", "concat", "uglify", "cssmin"]
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
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-contrib-sass");
  grunt.loadNpmTasks("grunt-contrib-cssmin");


  //
  // Register tasks
  //
  grunt.registerTask("default", ["connect", "watch"]);
  grunt.registerTask("build", ["jshint", "sass", "concat", "uglify", "cssmin"]);
};


