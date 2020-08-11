var gulp         = require('gulp'),
    sass         = require('gulp-sass'), // sass
    concat       = require('gulp-concat'), // Подключаем gulp-concat (для конкатенации файлов)
    uglify       = require('gulp-uglify-es').default, // Подключаем gulp-uglifyjs (для сжатия JS)
    cssnano      = require('gulp-cssnano'), // Подключаем пакет для минификации CSS
    sourcemaps   = require('gulp-sourcemaps'),
    autoprefixer = require('gulp-autoprefixer'),
    rename       = require('gulp-rename'); // Подключаем библиотеку для переименования файлов

gulp.task('sass', function() {
    return gulp.src([
        'app/sass/libs/**/*.scss',
        'app/sass/vendor/**/*.scss',
        'app/sass/parts/**/*.scss',
        'app/sass/responsive/**/*.scss'
    ])
    //.pipe(sourcemaps.init())
    .pipe(sass()) // Преобразуем Sass в CSS посредством gulp-sass
    .pipe(concat('production.css'))
    .pipe(autoprefixer({
        Browserslist: ['last 3 versions'],
        grid: true,
        cascade: false
    }))
    //.pipe(sourcemaps.write('././maps'))
    .pipe(gulp.dest('app/css')) // Выгружаем результата в папку app/css
    .pipe(cssnano()) // Сжимаем
    .pipe(rename({suffix: '.min'})) // Добавляем суффикс .min
    .pipe(gulp.dest('dist/css')); // Выгружаем в папку dest/css
});

gulp.task('scripts', function() {
    return gulp.src([
        'app/js/vendor/**/*.js',
        'app/js/parts/**/*.js'
        ])
        .pipe(concat('production.min.js')) // Собираем их в кучу в новом файле production.min.js
        .pipe(uglify()) // Сжимаем JS файл
        .pipe(gulp.dest('dist/js')); // Выгружаем в папку app/js
});

// watch 

gulp.task('watch', gulp.series('sass', 'scripts', function() {
    gulp.watch('app/sass/**/*.scss', gulp.series('sass'));
    gulp.watch('app/js/**/*.js', gulp.series('scripts'));
}));