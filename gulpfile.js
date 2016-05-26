var babel = require('gulp-babel');
var browserify = require('browserify');
var concat = require('gulp-concat');
var connect = require('gulp-connect');
var gulp = require('gulp')
var livereload = require('gulp-livereload');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var watchify = require('watchify');

gulp.task('server', () => {
  connect.server({
    host: '0.0.0.0',
    root: ['example', 'build'],
    port: 8001,
    livereload: true
  })
});

gulp.task('sass', () => {
  gulp.src('./src/instagram-feed.scss')
    .pipe(sass())
    .pipe(rename('instagram-feed.css'))
    .pipe(gulp.dest('./build/'))
    .pipe(livereload())
});

gulp.task('scripts', () => {
  watchify(browserify({
    entries: './example/app.js',
    extensions: ['.jsx'],
    debug: true
  }).transform('babelify', {
      plugins: ['transform-runtime'],
      presets: ['es2015', 'react']
    }))
    .bundle()
    .pipe(source('example.js'))
    .pipe(buffer())
    .pipe(gulp.dest('./example/'))
    .pipe(livereload())
});

gulp.task('demo-js', () => {
  browserify({
    entries: './example/app.js',
    extensions: ['.jsx'],
    debug: true
  }).transform('babelify', {
      plugins: ['transform-runtime'],
      presets: ['es2015', 'react']
    })
    .bundle()
    .pipe(source('demo.js'))
    .pipe(buffer())
    .pipe(uglify())
    .pipe(gulp.dest('./demo/'))
});

gulp.task('source-js', () => {
  return gulp.src('./src/*.jsx')
    .pipe(babel({
      plugins: ['transform-runtime'],
      presets: ['es2015', 'react']
    }))
    .pipe(gulp.dest('./build'))
});

gulp.task('watch', () => {
  livereload.listen()
  gulp.watch(['src/*.scss'], ['sass'])
  gulp.watch(['src/*.jsx', 'example/app.js'], ['scripts'])
});

gulp.task('dev', ['watch', 'scripts', 'sass', 'server']);
gulp.task('build', ['source-js', 'sass']);
// NODE_ENV=production gulp demo
gulp.task('demo', ['demo-js']);
