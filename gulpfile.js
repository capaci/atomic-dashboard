// Include gulp
var gulp = require('gulp');

// Include Our Plugins
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var cssnano = require('gulp-cssnano');
var htmlmin = require('gulp-htmlmin');
var jshint = require('gulp-jshint');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');

// Html
gulp.task('html', function() {
    return gulp.src('src/**/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('dist/'));
});

// Lint Task
gulp.task('lint', function() {
    return gulp.src('src/resources/js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// Compile Our Sass
gulp.task('sass', function() {
    return gulp.src('src/resources/scss/all.scss')
        .pipe(sass({ includePaths : ['src/resources/scss/'] }).on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(autoprefixer())
        .pipe(cssnano())
        .pipe(rename('ad.min.css'))
        .pipe(gulp.dest('dist/css'));
});

// Concatenate & Minify JS
gulp.task('scripts', function() {
    return gulp.src('src/resources/js/*.js')
        .pipe(concat('all.js'))
        .pipe(gulp.dest('dist'))
        .pipe(rename('all.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('src/**/*.html', ['html']);
    gulp.watch('src/resources/js/*.js', ['scripts']);
    gulp.watch('src/resources/scss/**/*.scss', ['sass']);
});

// Default Task
gulp.task('default', ['lint', 'html', 'sass', 'scripts', 'watch']);
