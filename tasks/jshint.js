module.exports = function (gulp, options, plugins) {
    gulp.task('lint', function() {
        return gulp.src(options.paths.scripts)
            .pipe(plugins.jshint())
            .pipe(plugins.jshint.reporter('default'));
    });
};
//module.exports = function (gulp, options, plugins) {
//    gulp.task('lint', ['clean:all'], function() {
//        return gulp.src(options.paths.scripts)
//            .pipe(plugins.jshint())
//            .pipe(plugins.jshint.reporter('default'));
//    });
//};
