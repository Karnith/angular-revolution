module.exports = function (gulp, options, plugins) {
    gulp.task('build', ['scripts:unminified', 'uglify']);
};
