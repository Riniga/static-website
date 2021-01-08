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

gulp.task('watch', function () {
    gulp.watch('source/html/**/*.html', gulp.series('html'));
    gulp.watch('source/pug/**/*.pug', gulp.series('pug'));
});

gulp.task('default', gulp.series('clean','pug','html', function (done) {
    done();
}));
