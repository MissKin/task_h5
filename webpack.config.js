const webpack = require('webpack')
module.exports = {
  devtool:'eval-source-map',//生成source map 方便调试
  entry:__dirname +'/webpacktest/index.js',
  output:{
    path:__dirname + '/dest',//__dirname 当前执行脚本所在的目录
	filename:'bundle.js'
  },
  devServer:{
	hot: true,// 开启服务器的模块热替换(HMR)
    contentBase:'./',//本地服务器加载页面所在的文件夹
    inline:true,//	设置为true，当源文件改变时会自动刷新页面
    historyApiFallback:true,//在开发单页应用时非常有用，它依赖于HTML5 history API，如果设置为true，所有的跳转将指向index.html
    port:'8083',//设置默认监听端口，如果省略，默认为”8080
  },
  plugins:[
    new webpack.HotModuleReplacementPlugin(),//// 开启全局的模块热替换(HMR)
	new webpack.NamedModulesPlugin(),// 控制台输出模块命名美化

  ]
}