#### 优化配置：
+ 使用 dll 动态链接库来进行单独打包， 节省打包时间
+ 使用 happypack 开启多线程打包
+ 使用 webpackParalleUglifyPlugin 开启多线程并且可以并行来压缩 JS

#### 使用 merge 来为不同的环境来解耦配置参数