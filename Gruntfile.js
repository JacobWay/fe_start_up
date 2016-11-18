// Wrapper function which encapsulates grunt 
// configuration.
module.exports = function(grunt){
  "use strict";

  // Force use of Unix newlines
  grunt.util.lineFeed = "\n";

  // initialize our configuration object.
  grunt.initConfig({
    // Store the project settings from the package.json
    pkg: grunt.file.readJSON("package.json"),

    // concat files
    concat: {
      options: {
        // define a string to put between each file
        // in the concatenated output
        separator: ";"
      },
      dist: {
        src: ["scripts/**/*.js"],
        dest: "dist/<%= pkg.name %>.js"
      },
    },

    connect: {
      server: {
        options: {
          port: 8989,
          host: "*",
          livereload: true,
          open: "http://localhost:8989/html/main.html",
        },
      },
    },

    watch: {
        options: {
          livereload: true,
        },
        files: ["Gruntfile.js", "scripts/*.js", "html/*.html", "css/*.css"],
    },


  });

  // Register modules
  grunt.loadNpmTasks("grunt-contrib-connect");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-concurrent");
  grunt.loadNpmTasks("grunt-browserify");
  grunt.loadNpmTasks("grunt-contrib-jshint");
  grunt.loadNpmTasks("grunt-contrib-concat");
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-contrib-sass");
  grunt.loadNpmTasks("grunt-contrib-cssmin");

  grunt.registerTask("default", ["connect", "watch"]);
};

