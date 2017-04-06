#####避免每次都输密码：git remote set-url origin git@github.com:zmxue/reactTest.git

#创建项目步骤

>1.使用`npm init`创建package.json文件

>2.安装webpack:`npm i webpack --save-dev`

>3.根据项目的目录，配置webpack.config.js

>4.创建.gitignore文件，指定git提交时忽略哪些文件


#项目运行

- 执行`npm run build`，运行项目

- 执行`npm run dev`,实时监控项目,并刷新浏览器中页面
  需要安装webpack-dev-server,同时配置package.json中的script->dev的值，同时配置webpack中的entry为：

  `entry: [`
       `'webpack/hot/dev-server',`
       `'webpack-dev-server/client?http://localhost:8080',`
       `'./app/main.js'`   
  `]