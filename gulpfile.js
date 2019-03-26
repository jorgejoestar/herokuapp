const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const rename = require('gulp-rename'); 
var gm = require('gm');

gm('./Images/AestheticBottle.jpg')
.resize(100)
//.rename('small_AestheticBottle.jpg')
.autoOrient()
.write('./changed/small/small_AestheticBottle.jpg', function (err) {
  if (!err) console.log(' nice ');
});

gm('./Images/AestheticBottle.jpg')
.resize(200)
//.rename('medium_AestheticBottle.jpg')
.autoOrient()
.write('./changed/medium/medium_AestheticBottle.jpg', function (err) {
  if (!err) console.log(' nice ');
});

gm('./Images/AestheticBottle.jpg')
.resize(300)
//.rename('large_AestheticBottle.jpg')
.autoOrient()
.write('./changed/large/large_AestheticBottle.jpg', function (err) {
  if (!err) console.log(' nice ');
});

gulp.task('default', () =>
    gulp.src('./Images/*')
        .pipe(imagemin([imagemin.jpegtran({progressive: true}),
            imagemin.gifsicle({interlaced: true}),])
                )
        .pipe(gulp.dest('./dist/Images'))
);