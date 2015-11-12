var gulp       = require('gulp');
var concat     = require('gulp-concat-sourcemap');
var ngAnnotate = require('gulp-ng-annotate');
var plumber    = require('gulp-plumber');


var jsFiles   = ['app/script.js', 'app/**/*module.js', 'app/**/*.js'];
var htmlFiles = ['!app/**/*.tpl.html', 'app/**/*.html'];
var tplFiles  = ['app/**/*.tpl.html'];

var dist      = './build/';

gulp.task('concat', function () {
    return gulp.src(jsFiles)
        .pipe(plumber())
        .pipe(ngAnnotate())
        .pipe(concat('script.js', {sourceRoot: '/'}))
        .pipe(gulp.dest(dist));
});

gulp.task('html', function () {
    return gulp.src(htmlFiles)
        .pipe(gulp.dest(dist));
});

gulp.task('tpl', function () {
    return gulp.src(tplFiles)
        .pipe(gulp.dest(dist));
});

gulp.task('watch', function () {
    gulp.watch(jsFiles,   ['concat']);
    gulp.watch(htmlFiles, ['html']);
    gulp.watch(tplFiles,  ['tpl']);
});