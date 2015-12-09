module.exports = function (gulp, options, plugins) {
    gulp.task('scripts:unminified', ['clean'], function() {
        return gulp.src(options.paths.scripts)
            .pipe(plugins.concat('angular-revolution.js'))
            .pipe(gulp.dest('release'));
    });

    gulp.task('scripts:minified', ['clean'], function() {
        return gulp.src(options.paths.scripts)
            .pipe(plugins.concat('angular-revolution.min.js'))
            .pipe(gulp.dest('build'));
    });
};

//module.exports = function (gulp, options, plugins) {
//    gulp.task('scripts:unminified', ['lint'], function() {
//        return gulp.src(options.paths.scripts)
//            .pipe(plugins.concat('angular-revolution.js'))
//            .pipe(gulp.dest('release'));
//    });
//
//    gulp.task('scripts:minified', ['lint'], function() {
//        return gulp.src(options.paths.scripts)
//            .pipe(plugins.concat('angular-revolution.min.js'))
//            .pipe(gulp.dest('build'));
//    });
//};
