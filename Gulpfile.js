const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer')
const rename = require('gulp-rename')

gulp.task('build-full', function() {
  const outputConfigs = {
    src: './src/main.scss',
    basename: 'biomatic'
  }
  return generateCSS(outputConfigs)
})

gulp.task('build-lite', function() {
  const outputConfigs = {
    src: './src/main.lite.scss',
    basename: 'biomatic.lite'
  }
  return generateCSS(outputConfigs)
})

gulp.task('build-atomic', function() {
  const outputConfigs = {
    src: './src/main.atomic.scss',
    basename: 'biomatic.atomic'
  }
  return generateCSS(outputConfigs)
})

gulp.task('build-layout', function() {
  const outputConfigs = {
    src: './src/main.layout.scss',
    basename: 'biomatic.layout'
  }
  return generateCSS(outputConfigs)
})

function generateCSS({ src = '', basename = '' }) {
  return gulp
    .src(src)
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(
      rename({
        basename,
        suffix: '.min',
        extname: '.css'
      })
    )
    .pipe(gulp.dest('./dist/'))
}
