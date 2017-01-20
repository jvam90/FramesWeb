const gulp = require("gulp");
const util = require("gulp-util");

const tasksApp = require("./gulptasks/app");
const tasksDeps = require("./gulptasks/deps");
const tasksServer = require("./gulptasks/server");

gulp.task("default", function(){
    if(util.env.production){//se quando eu executar o comando production
        gulp.start('deps', "app");
    } else {
        //desenvolvimento
        gulp.start('deps', 'app', 'server');
    }
})