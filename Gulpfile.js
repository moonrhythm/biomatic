const gulp = require('gulp')
const sass = require('gulp-sass')
const autoprefixer = require('gulp-autoprefixer')
const rename = require('gulp-rename')

gulp.task('build-full', function() {
  const outputConfigs = {
    src: './src/main.scss',
    basename: 'biomatic'
  }
  generateCSS(outputConfigs)
})

gulp.task('build-lite', function() {
  const outputConfigs = {
    src: './src/main.lite.scss',
    basename: 'biomatic.lite'
  }
  generateCSS(outputConfigs)
})

gulp.task('build-atomic', function() {
  const outputConfigs = {
    src: './src/main.atomic.scss',
    basename: 'biomatic.atomic'
  }
  generateCSS(outputConfigs)
})

function generateCSS({ src = '', basename = '' }) {
  gulp
    .src(src)
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(autoprefixer({browsers: ['last 2 versions']}))
    .pipe(
      rename({
        basename,
        suffix: '.min',
        extname: '.css'
      })
    )
    .pipe(gulp.dest('./dist/'))
}
