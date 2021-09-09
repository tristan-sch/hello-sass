const { src, dest, watch, series } = require('gulp')
const sass = require('gulp-sass')(require('sass'));

/* Function to compile the Sass */
function buildStyles() {
  return src('index.scss')
    .pipe(sass())
    .pipe(dest('css'))
}

/* Function to watch the Sass to monitor changes and recompile it if needed */
function watchTask() {
  watch(['index.scss'], buildStyles)
}

exports.default = series(buildStyles, watchTask)