#### 优化配置：
+ 使用 dll 动态链接库来进行单独打包， 节省打包时间
+ 使用 happypack 开启多线程打包
+ 使用 webpackParalleUglifyPlugin 开启多线程并且可以并行来压缩 JS

#### 使用 merge 来为不同的环境来解耦配置参数

#### tree shaking 剔除 JS 中没用到的代码(依赖 es6 模块化语法)

#### 提取公共代码块(splitChunks)

#### scope hoisting 减少代码声明，减少代码体积