"use strict";

var gulp = require("gulp");
var sass = require("gulp-sass");

sass.compiler = require("node-sass");
// place code for your default task here

const root = "src";

gulp.task("sass", function () {
  return gulp.src(`${root}/sass/**/*.scss`).pipe(sass.sync().on("error", sass.logError)).pipe(gulp.dest(`${root}/dist`));
});

gulp.task("sass:watch", function () {
  gulp.watch(`${root}/sass/**/*.scss`, function () { 
    return gulp.src(`${root}/sass/**/*.scss`).pipe(sass.sync().on("error", sass.logError)).pipe(gulp.dest(`${root}/dist`));
  });
});

function defaultTask(cb) {
  console.log(__dirname)
  console.log("sass","sass:watch")
  cb();
}

exports.default = defaultTask;
