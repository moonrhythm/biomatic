const gulp = require('gulp')
const sass = require('gulp-sass')
const autoprefixer = require('gulp-autoprefixer')
const rename = require('gulp-rename')

gulp.task('build-full', function() {
  const outputConfigs = {
    src: './src/build-full.scss',
    prefix: 'biomatic.',
    basename: 'full'
  }
  generateCSS(outputConfigs)
})

gulp.task('build-atomic', function() {
  const outputConfigs = {
    src: './src/build-atomic.scss',
    prefix: 'biomatic.',
    basename: 'atomic'
  }
  generateCSS(outputConfigs)
})

gulp.task('build-component', function() {
  const outputConfigs = {
    src: './src/build-component.scss',
    prefix: 'biomatic.',
    basename: 'component'
  }
  generateCSS(outputConfigs)
})

gulp.task('build-layout', function() {
  const outputConfigs = {
    src: './src/build-layout.scss',
    prefix: 'biomatic.',
    basename: 'layout'
  }
  generateCSS(outputConfigs)
})

gulp.task('build-utility', function() {
  const outputConfigs = {
    src: './src/build-utility.scss',
    prefix: 'biomatic.',
    basename: 'utility'
  }
  generateCSS(outputConfigs)
})

function generateCSS({ src = '', prefix = '', basename = '' }) {
  gulp
    .src(src)
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(autoprefixer({browsers: ['last 2 versions']}))
    .pipe(
      rename({
        basename,
        prefix,
        suffix: '.min',
        extname: '.css'
      })
    )
    .pipe(gulp.dest('./dist/'))
}
