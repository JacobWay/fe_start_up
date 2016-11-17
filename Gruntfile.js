module.exports = function(grunt){
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        sass: {
            compile: {
                files: {
                    "css/main.css": "pre_css/main.scss"
                },
            },
        },
        watch: {
            options: {
                livereload: true,
            },
            sass: {
                files: "pre_css/*.scss",
                tasks: "sass"
            },
        },
        express: {
            all: {
                options: {
                    port: 9888,
                    hostname: "localhost",
                    base: ".",
                    livereload: true,
                },
            },
        },
    });

    // Load the plugin that provides the "uglify" task.
    //grunt.loadNpmTasks("grunt-contrib-uglify");
    // Load browsersync task
    grunt.loadNpmTasks("grunt-browser-sync");
    grunt.loadNpmTasks("grunt-contrib-connect");
    grunt.loadNpmTasks("grunt-contrib-sass");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-express");

    // Default task(s).
    grunt.registerTask("default", ["watch"]);
    grunt.registerTask("server", ["express", "watch"]);
};
