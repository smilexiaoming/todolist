# Day 1
## 今日目标
1. 开发环境webpack
2. 相当丑的界面（没错，恶心自己的）

## 项目结构
```project
├─ .gitignore 
├─ carbon-config.json 
├─ LICENSE 
├─ package-lock.json 
├─ package.json 
├─ README.md
├─ webpack.config.js
├─ public
|   └ index.html
├─ dist
|  ├─ bundle.js
|  └ index.html
├─ Day1
|  └ index.js
```
初始化npm
```s
npm init -y
```

安装依赖
```s
npm install webpack webpack-cli -D
```

不多说写好webpack配置文件，都2020年了，如果还有童鞋不会基础配置，请官网学习一下，我是不会吐槽你的。

![carbon.png](https://i.loli.net/2020/05/12/n5jrPI4FeSGmYtb.png)

配置package.json

![carbon _3_.png](https://i.loli.net/2020/05/12/81xftBVkp5bdcQy.png)

我们再Day1文件夹下建立index.js文件，并随便写点代码：
```javascript
console.log('hello world')
```

并执行
```s
npm run build
```

这时候已经可以在dist目录看到生成的bundle.js文件：

![bundle.js](https://i.loli.net/2020/05/12/nQD98uys2YOgdAR.png)

现在文件打包功能已经完成，虽然很简陋，但是已经达到我们的目的。接下来我们要用html文件来引入我们最终打包好的文件。
有时候，懒是能够促进技术进步的动力，html-webpack-plugin 插件能够帮助我们使用html模板文件，并且自动引入打包文件，真的是不要太方便，它还有非常多的作用，后续再提。

安装依赖
```s
npm install html-webpack-plugin -D
```

修改webpack.config.js：

![carbon _3_.png](https://i.loli.net/2020/05/12/Ev7qf4soga5yQWX.png)

再次执行npm run build，可以看到dist文件加下多了index.html。
我们看下生成的index.html,自动引入了bundle.js。完美

![carbon.png](https://i.loli.net/2020/05/12/sawuhIqb2HZ5xYE.png)

今天最后一步，配置开发环境，修改文件，浏览器自动更新页面

安装依赖
```s
npm install webpack-dev-server -D
```

修改webpack.config.js：

![carbon _1_.png](https://i.loli.net/2020/05/12/jNLRuClHr591XhF.png)

修改package.json:

![carbon _2_.png](https://i.loli.net/2020/05/12/8gTyjWzVGQ4FmkN.png)

并执行
```s
npm run start
```

打开浏览器，输入localhost:8080,即可在打印台看见打印的信息。
今天搞完收工，可以安心玩会王者啦！
