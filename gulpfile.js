var gulp = require('gulp');

var clean = require('gulp-clean');
gulp.task('clean', function () {
    return gulp.src('./public', { read: false, allowEmpty: true })
        .pipe(clean());
});

gulp.task('html', function () {
    return gulp.src('./source/html/*.html')
        .pipe(gulp.dest('./public'));
});

var pug = require('gulp-pug');
gulp.task('pug', function () {
    return gulp.src('./source/pug/pages/*.pug')
        .pipe(pug({ pretty: true }))
        .pipe(gulp.dest('./public'));
});

var sass = require('gulp-sass');
sass.compiler = require('node-sass');
gulp.task('sass', function () {
    return gulp.src('./source/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./public/styles'));
});

var ts = require('gulp-typescript');
var tsProject = ts.createProject('tsconfig.json');
gulp.task('typescript', function () {
    return gulp.src('./source/typescript/**/*.ts')
        .pipe(tsProject())
        .js.pipe(gulp.dest('./public/scripts'));
});

gulp.task('watch', function () {
    gulp.watch('source/pug/**/*.pug', gulp.series('pug'));
    gulp.watch('source/sass/**/*.scss', gulp.series('sass'));
    gulp.watch('source/typescript/**/*.ts', gulp.series('typescript'));
});

gulp.task('default', gulp.series('clean','pug','sass','typescript', function (done) {
    done();
}));
