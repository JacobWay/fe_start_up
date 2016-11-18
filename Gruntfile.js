//
// http://24ways.org/2013/grunt-is-not-weird-and-hard/
//
module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    "connect": {
      keepalive: {
        options: {
          port: 8989,
          host: "localhost",
          livereload: true,
          open: "http://localhost:8989/html/main.html"
        }
      }
    },
    "watch": {
      "build": {
        files: ["scripts/main.js", "html/*.html"],
        options: {
          livereload: true
        }
      }
    },
  });


  //
  // Register modules
  //
  grunt.loadNpmTasks("grunt-contrib-connect");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-concurrent");
  grunt.loadNpmTasks("grunt-browserify");


  //
  // Register tasks
  //
  grunt.registerTask("serve", ["connect", "watch:build"]);
};


