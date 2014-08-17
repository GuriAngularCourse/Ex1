
var gulp = require('gulp');

var uglify = require("gulp-uglify");

gulp.task('js', function() {
  // place code for your default task here
    return gulp.src("./src/**/*.js", ".js")
        .pipe(uglify())
        .pipe(gulp.dest("./dest/"));



});


gulp.task("watch", function() {

    gulp.watch("./src/**/*.js",["js"]);
})
