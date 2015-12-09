var gulp = require('gulp');

var paths = {
    scripts: ['src/**/*.js'],
    minified: ['build/*.js'],
    dirs: ['build/*', 'release/*']
};

// Override plugins list
// Default: require('gulp-load-plugins')()
var plugins = {
    del: require('del'),
    jshint: require('gulp-jshint'),
    concat: require('gulp-concat'),
    uglify: require('gulp-uglify'),
    ngdocs: require('gulp-ngdocs'),
    vinylPaths: require('vinyl-Paths')
};

require('load-gulp-tasks')(gulp, { paths: paths }, plugins);

gulp.task('default', ['lint', 'build']);