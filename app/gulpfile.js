var gulp = require('gulp');
var postcss = require('gulp-postcss');

gulp.task('theme', function () {
  var processors = [
    require('precss')(),
    require('postcss-cssnext')()
  ];
  return gulp.src('./client/theme.css')
    .pipe(postcss(processors))
    .pipe(gulp.dest('../dist'));
});
