var gulp = require('gulp'),
  browserSync = require('browser-sync').create(),//浏览器静态服务器启动
  reload = browserSync.reload,
  fileInclude = require('gulp-file-include'),//文件include
  imagemin = require('gulp-imagemin'),//图片压缩
  clean = require('gulp-clean'),//删除文件
  changed  = require('gulp-changed'),//检查改变状态
  uglify = require('gulp-uglify'),//混淆代码
  del = require('del'),
  debug = require('gulp-debug'),
  less = require('gulp-less'),//less编译
  gwatch= require('gulp-watch'),//监听文件的 add change unlink
  assetRev = require('gulp-asset-rev');//为文件添加hash值

var DEST = './dist';

gulp.task('clean',function(){
  return gulp.src('./dist/')
	.pipe(clean())
});
//删除dist 下的所有文件
gulp.task('delete',function () {
  return del(['dist/*','!dist/style/img']);
});

gulp.task('less',function(){
  gulp.src('./style/css/*.less',{base:'./'})
	.pipe(changed(DEST,{extension:'.less'}))
	.pipe(debug({title:'less调试'}))
	.pipe(less())
	.pipe(gulp.dest(DEST))
	.pipe(reload({stream:true}))
})

  gulp.task('html',function(){
	gulp.src('./views/returnCard/*.html',{base:'./'})
	  .pipe(changed(DEST,{extension:'.html'}))
	  .pipe(debug({title:'页面'}))
	  .pipe(fileInclude({
		prefix:'@@',
		basepath: '@file'
	  }))
	  .pipe(gulp.dest(DEST))
	  .pipe(reload({stream:true}))
  });
gulp.task('script',function(){
  return gulp.src('./style/js/*.js',{base:'./'})
	.pipe(changed(DEST,{extension: '.js'}))
	.pipe(debug({title:'js调试'}))
	.pipe(gulp.dest(DEST))
	.pipe(reload({stream: true}));
});
gulp.task('filewatch',function(){
  return gwatch('./views/returnCard/*.html',function(){
    gulp.src('./views/returnCard/*.html')
	  .pipe(debug({title:'g-watch'}))
	  .pipe(gulp.dest(DEST))
  })
});
  gulp.task('css',function(){
    gulp.src('./style/css/*.css',{base:'./'})
	  .pipe(changed(DEST,{extension:'.css'}))
	  .pipe(debug({title:'调试'}))
	  .pipe(gulp.dest(DEST))
	  .pipe(reload({stream:true}))
  });
  gulp.task('fonts',function(){
    gulp.src('./style/fonts/*.*',{base:'./'})
	  .pipe(changed(DEST,{hasChanged: changed.compareSha1Digest}))
	  .pipe(gulp.dest(DEST))
	  .pipe(reload({stream:true}))
  })
  gulp.task('images',function(){
    gulp.src('./style/img/*.*',{base:'./'})
	  /*.pipe(imagemin({
		progressive: true
	  }))*/
	  .pipe(gulp.dest(DEST))
	  .pipe(reload({stream: true}))
  });

  gulp.task('serve',function(){
	gulp.start('html','css','images','fonts','script','less');
	browserSync.init({
	  port:'2018',
	  server:{
		baseDir:['dist']
	  }
	});
	gulp.watch('style/js/*.js',['script']); //监控文件变化，自动更新
	gulp.watch('style/css/*.css',['css']);
	gulp.watch('./views/**/*.html',['html']);
	gulp.watch('./style/images/*.*',['images']);
	gulp.watch('./style/css/*.less',['less']);
  });
  gulp.task('default',['serve']);