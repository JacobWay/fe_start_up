install require js
install grunt js
install grunt-contrib-watch
install grunt-contrib-connect
install grunt-contrib-sass
install sass: gem install sass
install grunt-express. for live reloadin

Function Lists:
Live reloading web server.
JS lint
Sass preprocess compile.
File concat.

Undone Lists:
Uglify files.
Test app.
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
