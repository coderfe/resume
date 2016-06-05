var gulp = require('gulp'),
    scss = require('gulp-sass'),
    scssLint = require('gulp-scss-lint'),
    autoprefixer = require('gulp-autoprefixer'),
    browserSync = require('browser-sync'),
    // pug = require('gulp-pug'),
    jade = require('gulp-jade'),
    data = require('gulp-data'),
    path = require('path'),
    fs = require('fs');
    // ghPages = require('gulp-gh-pages');

// scss to css
gulp.task('scss', function() {
    return gulp.src('./scss/**/resume.scss')
      .pipe(scss({outputStyle: 'compressed'}).on('error', scss.logError))
      .pipe(autoprefixer({browsers: ["last 3 versions"]}))
      .pipe(gulp.dest('./css'))
      .pipe(browserSync.stream());
});

// get jsonfile and render the index.jade
gulp.task('jade', function() {
  var resumeData = JSON.parse(fs.readFileSync('./data/' + path.basename('resume') + '.json'));

  return gulp.src('./jade/index.jade')
    .pipe(jade({
      pretty: true,
      locals: resumeData
    }))
    .pipe(gulp.dest('./'))
    .pipe(browserSync.stream());
});

// browser-sync服务器
gulp.task('browserSync', ['scss', 'jade'], function() {

    browserSync.init({
        server: "./"
    });

    gulp.watch('./scss/**/*.scss', ['scss']);
    gulp.watch('./jade/**/*.jade', ['jade']);
    gulp.watch('./data/resume.json', ['jade']);
});

// gulp.task('deploy', function() {
//   return gulp.src('./dist/**/*')
//     .pipe(ghPages());
// });
gulp.task('default', ['browserSync', 'scss', 'jade']);


// marked to html
var imagemin = require('gulp-imagemin');
gulp.task('img', function() {
    return gulp.src('./download/icon/*.svg')
      .pipe(imagemin())
      .pipe(gulp.dest('./download/icons/'));
});