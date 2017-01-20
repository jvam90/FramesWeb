const gulp = require("gulp");
const watch = require("gulp-watch");
const webserver = require("gulp-webserver");

gulp.task("server", ["watch"], function(){
    //aqui vou dizer pra onde o servidor vai ver os arquivos
    //ele olha pra pasta e vai servir os arquivos
    gulp.src(["public"]).pipe(webserver({
        livereload: true,
        port: 3000,
        open: true
    }));
});

gulp.task("watch", function(){
    //defino aqui o que eu quero monitorar para quando mudarem, o servidor dar redeploy
    watch("app/**/*.html", function(){
        gulp.start("app.html");
    });
    watch("app/**/*.css", function(){
        gulp.start("app.css");
    });
    watch("app/**/*.js", function(){
        gulp.start("app.js");
    });
    watch("assets/**/*.*", function(){
        gulp.start("app.assets");
    });
});