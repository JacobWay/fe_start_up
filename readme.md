install require js
install grunt js
install grunt-contrib-watch
install grunt-contrib-connect
install grunt-contrib-sass
install sass: gem install sass
install grunt-contrib-uglify
install grunt-contrib-cssmin
install grunt-contrib-jshint
install grunt-contrib-qunit

Function Lists:
Live reloading web server.
JS lint.
Sass preprocess compile.
Concat and compress file.
Unit test.
RequireJS for file and module loader.

Undone Lists:
Performance test.


Config an live reloading server.
install grunt-contrib-watch, grunt-contrib-connect.
In connect, watch directives, there is a parameter livereload, configing it to true.
connect: {
  options: {
    livereload: true,
  }
}
watch: {
  options: {
    livereload: true,
  }
}
caveat:
Don't config keepalive parameter in connect directive. It will block watch task.
keepalive: true // Don't


JS lint
Install grunt-contrib-jshint

play with require js

What is RequireJS?
RequireJS is a JavaScript file and moudle loader.

What is npm?
npm is package manager for JavaScript.
