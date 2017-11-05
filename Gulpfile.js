const gulp = require('gulp')
const sass = require('gulp-sass')
const prefix = require('gulp-autoprefixer')
const rename = require('gulp-rename')

gulp.task('build-full', function() {
  gulp.src('./src/build-full.scss')
      .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
      .pipe(prefix({browsers: ['last 2 versions']}))
      .pipe(
        rename({
          basename: "full",
          prefix: "biomatic.",
          suffix: ".min",
          extname: ".css"
        })
      )
      .pipe(gulp.dest('./dist/'))
})

gulp.task('build-atomic', function() {
  gulp.src('./src/build-atomic.scss')
      .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
      .pipe(prefix({browsers: ['last 2 versions']}))
      .pipe(
        rename({
          basename: "atomic",
          prefix: "biomatic.",
          suffix: ".min",
          extname: ".css"
        })
      )
      .pipe(gulp.dest('./dist/'))
})

gulp.task('build-component', function() {
  gulp.src('./src/build-component.scss')
      .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
      .pipe(prefix({browsers: ['last 2 versions']}))
      .pipe(
        rename({
          basename: "component",
          prefix: "biomatic.",
          suffix: ".min",
          extname: ".css"
        })
      )
      .pipe(gulp.dest('./dist/'))
})

gulp.task('build-layout', function() {
  gulp.src('./src/build-layout.scss')
      .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
      .pipe(prefix({browsers: ['last 2 versions']}))
      .pipe(
        rename({
          basename: "layout",
          prefix: "biomatic.",
          suffix: ".min",
          extname: ".css"
        })
      )
      .pipe(gulp.dest('./dist/'))
})

gulp.task('build-utility', function() {
  gulp.src('./src/build-utility.scss')
      .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
      .pipe(prefix({browsers: ['last 2 versions']}))
      .pipe(
        rename({
          basename: "utility",
          prefix: "biomatic.",
          suffix: ".min",
          extname: ".css"
        })
      )
      .pipe(gulp.dest('./dist/'))
})
