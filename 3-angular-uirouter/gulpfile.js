
// grab our gulp packages
var gulp  = require('gulp'),
    gutil = require('gulp-util'),
    express = require('express'),
    app = express();

//server starting
gulp.task('server', function() {
  app.use(express.static(__dirname));
  app.listen(4000, '0.0.0.0');
  console.log("server localhost:4000/ started.");
});

// The default task (called when you run `gulp` from cli)
gulp.task('default', ['server']);

