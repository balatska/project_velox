let gulp = require ("gulp");
let sass = require ("gulp-sass");
let gulpAutoprefixer = require ("gulp-autoprefixer");
let browserSync = require ("browser-sync").create() ;

//compile scss into css
function style() {
    //1. where is my scss file
    return gulp.src("./style/**/*.scss")
        //2. pass that file through sass compiler
        .pipe(sass())
        //3. where do I save the compiled css?
        .pipe(gulp.dest("./style"))
        //4. stream changes to all browsers
        .pipe(browserSync.stream());
}

function watch() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch("./style/**/*.scss", style);
    gulp.watch("./*.html").on("change", browserSync.reload);
}

exports.style = style;
exports.watch = watch;