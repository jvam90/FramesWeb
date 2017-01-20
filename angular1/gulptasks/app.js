const gulp = require("gulp");
const htmlmin = require("gulp-htmlmin");
const concat = require("gulp-concat");
const uglifycss = require("gulp-uglifycss");
const babel = require("gulp-babel");
const uglify = require("gulp-uglify");

//quando chamar a task, as 4 tasks da dependência vão ser chamdas
gulp.task('app', ['app.html', 'app.css', 'app.js', 'app.assets'])
gulp.task('app.html', function(){//quando for chamada a task app.html, vai executar sua função de callback
    //fazer operações sobre html
    gulp.src(["app/**/*.html"])//pegar tudo o que tá na pasta app de html e vai minificá-lo
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest("public"));//vai jogar tudo dentro de public
});
gulp.task("app.css", function(){
    gulp.src(["app/**/*.css"])
    .pipe(uglifycss({"uglyComments" : true}))
    .pipe(concat("app.min.css"))
    .pipe(gulp.dest("public/assets/css"));
});
gulp.task("app.js", function(){
//fazer operações sobre js
    gulp.src(["app/**/*.js"])
    .pipe(babel({presets: ["es2015"]}))//converter padrões novos para padrões mais antigos
    .pipe(uglify())
    .pipe(concat("app.min.js"))
    .pipe(gulp.dest("public/assets/js"));
});
gulp.task("app.assets", function(){
//fazer operações sobre imagens, etc
    gulp.src(["assets/**/*.*"])
    .pipe(gulp.dest("public/assets"))
});

//é o gulp da parte da aplicação