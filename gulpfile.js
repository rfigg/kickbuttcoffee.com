var gulp = require('gulp');
var	gutil = require('gulp-util');
var	concat = require('gulp-concat');
var minifyCss = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var	browserSync = require('browser-sync').create();

var paths = {
	stylesheets: ["./css/normalize.min.css","./css/main.css","./css/meanmenu.css","./css/slick.css","./css/slick-theme.css"],
	scripts: ["./js/vendor/slick.min.js","./js/vendor/jquery.meanmenu.js"]
}

gulp.task('serve', function() {
	// gutil.log("Why, hello");
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
	// gutil.log("See ess ess ing");
	return gulp.src(paths.stylesheets)
		.pipe(concat("all.css"))
		.pipe(minifyCss({keepSpecialComments:0}))
		.pipe(gulp.dest("./css/"))
		.pipe(browserSync.stream());
});

gulp.task('js', function() {
	gulp.src(paths.scripts)
	.pipe(uglify())
	.pipe(concat("all.js"))
	.pipe(gulp.dest("./js/"));
})

gulp.task('default', ['css','js','serve']);