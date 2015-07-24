var gulp = require('gulp');
var	gutil = require('gulp-util');
var	concat = require('gulp-concat');
var	browserSync = require('browser-sync').create();

gulp.task('serve', function() {
	gutil.log("Why, hello");

	browserSync.init({
		server: {
			baseDir: "./"
		}
	});

	gulp.watch("*.htm*").on("change", browserSync.reload);
	gulp.watch("*.php").on("change", browserSync.reload);
	gulp.watch("css/*.css", ['css']);
});

gulp.task('css', function() {
	gutil.log("See ess ess ing");
	
	return gulp.src(["./css/normalize.min.css","./css/main.css","./css/jquery.sidr.dark.dev.css"])
		.pipe(concat("all.css"))
		// .pipe(minify)
		.pipe(gulp.dest("./css/"));
		// .pipe(browserSync.stream());
});

gulp.task('js', function() {
	// gulp.src
	// .pipe(concat)
	// already minified
	// .pipe(gulp.dest)
})

gulp.task('default', ['serve']);