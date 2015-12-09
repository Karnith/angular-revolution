module.exports = function (gulp, options, plugins) {
    gulp.task('uglify', ['scripts:minified'], function() {
        return gulp.src(options.paths.minified)
            .pipe(plugins.uglify())
            .pipe(gulp.dest('release'));
    });
};
