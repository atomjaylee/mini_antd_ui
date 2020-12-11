const path = require('path');
const gulp = require('gulp');
const less = require('gulp-less');
const rename = require('gulp-rename');
const babel = require('gulp-babel');

const isProduction = process.env.NODE_ENV === 'production';
const dist = isProduction ? path.join(__dirname, '../es') : path.join(__dirname, '../examples/es');
const components = path.join(__dirname, '../components');

const exTypes = ['ts', 'less', 'json', 'axml', 'sjs'];

// -------------------- 任务单元 --------------------
gulp.task('less', () =>
  gulp
    .src(`${components}/**/*.less`)
    .pipe(less())
    .on('error', e => console.error(e))
    .pipe(rename({ extname: '.acss' }))
    .pipe(gulp.dest(dist)),
);

gulp.task('ts', () =>
  gulp
    .src(`${components}/**/*.ts`)
    .pipe(babel())
    .on('error', e => console.error(e))
    .pipe(gulp.dest(dist)),
);

gulp.task('json', () => gulp.src(`${components}/**/*.json`).pipe(gulp.dest(dist)));
gulp.task('axml', () => gulp.src(`${components}/**/*.axml`).pipe(gulp.dest(dist)));
gulp.task('sjs', () => gulp.src(`${components}/**/*.sjs`).pipe(gulp.dest(dist)));

// -------------------- 监听任务 --------------------
const build = gulp.series(...exTypes);
build();

exTypes.forEach(type => {
  const watcher = gulp.watch(`${components}/**/*${type}`, gulp.series(type));
  watcher.on('change', evt => console.log(`File ${evt} was changed`));
  watcher.on('add', evt => console.log(`File ${evt} was added`));
  watcher.on('unlink', evt => console.log(`File ${evt} was removed`));
});
