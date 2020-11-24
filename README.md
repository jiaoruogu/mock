# mock
前端快速创建mock服务

首先需要在项目中安装express 和 nodemon
```javascript
npm install express nodemon --save
```

nodemon是一个检测服务端文件修改自动重启生效的包

将mock文件夹拷贝到src目录下

在package.json的script标签下加一个"mock": "nodemon src/mock/app.js"命令

在vue.config.js中 的DevServer选项里添加
```javascript
devServer: {
    proxy: {
      '/mock': {
        target: 'http://127.0.0.1:8848',// 本机启动端口对应app.js 里面port的值
        ws: true,
        changeOrigin: true,
        pathRewrite: { // 不加pathRewrite的话，路由里会多mock/这一段
          '^/mock': ''
        }
      }
    }
  }
```

启动项目后，再启动mock服务，对应接口的的mock数据在mock/router里面添加