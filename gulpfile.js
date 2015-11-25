/**
 * Created by Administrator on 2015/11/9.
 */
var gulp=require("gulp"),
    del=require('del'),
    pngquant=require('imagemin-pngquant');
    //sass = require('gulp-ruby-sass'),
    //autoprefixer = require('gulp-autoprefixer'),
    //minifycss = require('gulp-minify-css'),
    //jshint = require('gulp-jshint'),
    //uglify = require('gulp-uglify'),
    //imagemin = require('gulp-imagemin'),
    //rename = require('gulp-rename'),
    //clean = require('gulp-clean'),
    //concat = require('gulp-concat'),
    //notify = require('gulp-notify'),
    //cache = require('gulp-cache'),
    //livereload = require('gulp-livereload'),
    //cache=require('gulp-cache');

//自动加载插件，后续用其他插件直接使用驼峰式命名即可，
// 及plugins.rename,省略了上述冗长的代码片段；
var plugins=require("gulp-load-plugins")({
    rename:{
        'gulp-minify-css':'minifycss',
        'gulp-ruby-sass':'sass'
    }
});
//预设任务，默认执行的任务default;
gulp.task("default",["clean"],function(){
    gulp.start("styles","scripts","images","angularjsRoute","controller","service","watch");
});
// 清除任务；
gulp.task("clean",[],function(cb){//cb为一个回调函数，确保任务完成时跳出；
    //return gulp.src(['./public/apps/dist-gulp/**'],{read:false})
    //    .pipe(plugins.clean())
    return del(['./public/apps/dist-gulp/**'],cb);//使用del插件完成删除，上面是不使用del插件，使用clean命令的情况；
});
//设置css压缩任务；
gulp.task("styles",[],function(){
    return gulp.src("./public/apps/dist/**/*.css")
        //.pipe(plugins.watch())
        .pipe(plugins.autoprefixer({
            browsers: ['last 2 versions','safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'],
            cascade: true, //是否美化属性值 默认：true 像这样：
            //-webkit-transform: rotate(45deg);
            //        transform: rotate(45deg);
            remove:true //是否去掉不必要的前缀 默认：true
        }))//根据设置浏览器版本自动处理浏览器前缀
        .pipe(plugins.rename({suffix:'.min'}))
        .pipe(plugins.minifycss())
        .pipe(gulp.dest("./public/apps/dist-gulp"))
        .pipe(plugins.notify({message:'css minified finished!'}))
});
//js文件压缩；
gulp.task("scripts", [],function () {
    return gulp.src("./public/apps/dist/**/*.js")
        //.pipe(plugins.watch())
        .pipe(plugins.jshint())//检测js语法是否正确；
        .pipe(plugins.jshint.reporter())//输出检查结果
        .pipe(plugins.rename({suffix:'.min'}))//对js文件重命名;
        .pipe(plugins.uglify())//对重命名后的文件进行压缩;
        .pipe(gulp.dest("./public/apps/dist-gulp"))
        .pipe(plugins.livereload())//当代码变化时，它可以帮我们自动刷新页面;
        .pipe(plugins.notify({message:'scripts minified finished!'}))
});
//图片压缩
gulp.task("images",[],function(){
   return gulp.src("./public/apps/dist/img/*.{png,jpg,ico,gif,JPG}")
       //.pipe(plugins.watch())
       .pipe(plugins.imagemin({//普通压缩
           optimizationLevel: 5, //类型：Number  默认：3  取值范围：0-7（优化等级）
           progressive: true, //类型：Boolean 默认：false 无损压缩jpg图片
           interlaced: true, //类型：Boolean 默认：false 隔行扫描gif进行渲染
           multipass: true //类型：Boolean 默认：false 多次优化svg直到完全优化
       }))
       /*
       .pipe(plugins.imagemin({//深度压缩
               progressive: true,//类型：Boolean 默认：false 无损压缩jpg图片
               svgoPlugins: [{removeViewBox: false}],//不要移除svg的viewbox属性
               use: [pngquant()] //使用pngquant深度压缩png图片的imagemin插件
       }))
       .pipe(plugins.cache(plugins.imagemin({//仅当图片被修改时被压缩
           progressive: true,//类型：Boolean 默认：false 无损压缩jpg图片
           svgoPlugins: [{removeViewBox: false}],//不要移除svg的viewbox属性
           use: [pngquant()] //使用pngquant深度压缩png图片的imagemin插件
       })))
       */
       .pipe(gulp.dest('./public/apps/dist-gulp/img'))
       .pipe(plugins.livereload())//当代码变化时，它可以帮我们自动刷新页面;
       .pipe(plugins.notify({meassage:"images minified finished!"}))

});

/**
 * angularjs文件压缩
 */
gulp.task("angularjsRoute",[],function(){
    return gulp.src("./public/apps/angularRoute.js")
        .pipe(plugins.rename({suffix:'.min'}))
        .pipe(plugins.uglify())
        .pipe(gulp.dest("./public/apps"))
        .pipe(plugins.livereload())
        .pipe(plugins.notify({message:'angularjs 路由压缩完成!'}))
});
gulp.task("controller",[],function(){
    return gulp.src("./public/apps/src/controller/*.js")
        .pipe(plugins.jshint())//检测js语法是否正确；
        .pipe(plugins.jshint.reporter())//输出检查结果
        .pipe(plugins.rename({suffix:'.min'}))
        .pipe(plugins.uglify())
        .pipe(gulp.dest("./public/apps/src/controllerMin"))
        .pipe(plugins.livereload())
        .pipe(plugins.notify({message:'angularjs controller js文件压缩完成!'}))
});
gulp.task("service",[],function(){
    return gulp.src("./public/apps/src/service/*.js")
        .pipe(plugins.jshint())//检测js语法是否正确；
        .pipe(plugins.jshint.reporter())//输出检查结果
        .pipe(plugins.rename({suffix:'.min'}))
        .pipe(plugins.uglify())
        .pipe(gulp.dest("./public/apps/src/serviceMin"))
        .pipe(plugins.livereload())
        .pipe(plugins.notify({message:'angularjs service js文件压缩完成!'}))
});


gulp.task("watch",[],function(){
    plugins.livereload.listen();
    var watcher=gulp.watch('public/apps/dist/**',["styles"]);
    watcher.on("changed",function(event){
        console.log(event.path);
        console.log(event.type);

    });

});