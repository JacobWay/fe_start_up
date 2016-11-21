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

    // Concat files
    concat: {
      options: {
      },
      foo: {
      },
      //options: {
        //// define a string to put between each file
        //// in the concatenated output
        //separator: ";",
        //sourceMap: true,
      //},
      //dist: {
        //src: ["scripts/**/*.js"],
        //dest: "dist/<%= pkg.name %>.js"
      //},
    },

    // Minifies the files
    uglify: {
      options: {
        // The banner is inserted at the top of the output
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n',
        sourceMap: true,
      },
      dist: {
        src: "backbone/scripts/*.js",
        dest: 'backbone/dist/<%= pkg.name %>.min.js'
      },
    },

    sass: {
      dist: {
        files: [{
          expand: true,
          cwd: "backbone/pre_css",
          src: ["*.scss"],
          dest: "backbone/css",
          ext: ".css",
        }],
      },
    },

    cssmin: {
      css: {
        options: {
          sourceMap: true,
        },
        files: [{
          expand: true,
          cwd: "backbone/css",
          src: ["*.css", "!*.min.css"],
          dest: "backbone/css",
          ext: ".min.css",
        }],
      },
    },

    // To automate the testing of the code
    qunit: {
      files: ["backbone/test/**/*.html"],
    },

    // Analyze JS files
    jshint: {
      files: ["backbone/Gruntfile.js", "backbone/scripts/**/*.js", ],
      options:{
      },
    },

    connect: {
      server: {
        options: {
          port: 8989,
          host: "*",
          livereload: true,
          open: "http://localhost:8989/backbone/html/main.html",
        },
      },
    },

    watch: {
      refresh: {
        options: {
          livereload: true,
        },
        files: ["backbone/Gruntfile.js", "backbone/scripts/*.js", "backbone/html/*.html", "backbone/css/*.css", "backbone/test/*.js"],
      },
      watch_tasks: {
        files: ["backbone/Gruntfile.js", "backbone/scripts/*.js", "backbone/html/*.html", "backbone/pre_css/*.scss", "backbone/test/*.html"],
        tasks: ["concat", "uglify", "jshint", "sass", "cssmin", "qunit"]
      },
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
  grunt.loadNpmTasks("grunt-contrib-qunit");

  grunt.registerTask("build", ["jshint", "concat", "uglify", "sass", "cssmin"]);
  grunt.registerTask("test", ["jshint", "qunit"]);
  grunt.registerTask("default", ["connect", "watch"]);
};

