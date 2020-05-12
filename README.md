# 新手练习项目
如果你也是一位前端“菜鸟”，苦于无法在日常工作上“实施抱负”（其实就是练练生疏的手），那么就跟着我一步一步实现一个小项目吧。
项目虽小，但作为有专业意识的我们，必须把平时积攒的力量，全部用上。（感觉已经看到了一个美妙的、令人赞叹的、amazing的todolist了）
废话说多了，自己差点都要相信，开干才是硬道理。

# 使用技术栈
React + AntDesign + webpack + koa2 + mysql

# 不积跬步无以至千里
相信大家日常的业务需求也不会少，当自己想要做做练手项目时，就会以时间不充足为由，然后下班回到家来两把王者...。
我有办法治理你们的（其实还包括自己，但是我不想告诉你们）懒癌晚期，那就是任务细化，细到一天只写一丢丢代码，让你的懒癌都嫌弃你的懒，从而不愿意继续赖着你。
绝大多数代码我都将以图片的形式显示，防止你们粘贴复制（好机智）。当然，你们也可以[github](https://github.com/smilexiaoming/todolist#readme)上来下载所有代码。

# 项目开始
大家先给自己鼓掌

## Day 1
### 今日目标
1. 开发环境webpack
2. 相当丑的界面（没错，恶心自己的）

项目结构

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
