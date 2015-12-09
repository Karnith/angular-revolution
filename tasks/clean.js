module.exports = function (gulp, options, plugins) {
    gulp.task('clean', function() {
        return plugins.del(['output']);
    });
};
//module.exports = function (gulp, options, plugins) {
//    gulp.task('clean:all', function() {
//        return gulp.src(options.paths.dirs)
//            .pipe(plugins.vinylPaths(plugins.del))
//            .pipe(gulp.dest('release'));
//    });
//
//    gulp.task('clean:build', ['uglify'], function() {
//        return gulp.src('build/*')
//            .pipe(plugins.vinylPaths(plugins.del))
//            .pipe(gulp.dest('release'));
//    });
//};