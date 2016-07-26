var gulp = require('gulp');
var postcss = require('gulp-postcss');
var watch = require('gulp-watch');

gulp.task('build', function () {
  var processors = [
    require('precss')(),
    require('postcss-cssnext')()
  ];
  return gulp.src('./client/theme.css')
  .pipe(postcss(processors))
  .pipe(gulp.dest('../dist'));
});

gulp.task('watch', function () {
  gulp.watch('./client/**/*.css', ['build']);
});
