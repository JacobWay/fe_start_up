## Function Lists:
1. Live reloading web server.
2. JS lint.
3. Sass compile.
4. Concat and compress file.
5. Unit test.
6. RequireJS for file and module loader.

### Undone Lists:
1. Performance test.
2. Add Gulp

---

### Config an live reloading server.
install grunt-contrib-watch, grunt-contrib-connect.
In connect, watch directives, there is a parameter livereload, configing it to true.
```javascript
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
```

**caveat**:
Don't config keepalive parameter in connect directive. It will block watch task.
keepalive: true // Don't


### JS lint
npm install --save-dev grunt-contrib-jshint

