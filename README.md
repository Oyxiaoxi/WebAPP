# WebAPP

## 创建项目

```bash
npm install -g express-generator@4 

创建 service
express -e service

cd serveice/

cat package.json

按装项目依赖
npm install

```

### 环境搭建成功

## 测试服务

```bash
sudo npm instasll -g supervisor

supervisor bin/www
```

## 安装 session

```bash
npm install express-session --save
```

## 如何使用 node 开发服务程序

##### 搞清楚路由机制，路由对应模块。如果有登陆，就用 session 作中间键，挂载！

## React Native环境搭建

[https://facebook.github.io/react-native](官网)

```bash
npm install watchman
sudo npm install -g react-native-cli 
react-native init AwesomeProject //创建项目
cd AwesomeProject
react-native run-ios // 运行
```
## TwebVoew -> Packaging success

##### 需要注意的是： 自定义 TWebView 方法 ，及 TWebView 里渲染视图时的判断方法( onError, _showError, startInLoadingState, source )

##### 有没有办法可以解决 RCTBundleURLProvider.h 这个头文件丢失： 当我每更换一台设备重新完成此项目时，都会出现这个问题。有试过百度大神的各种方法，都无法达到其效果！无耐的，把整个项目重新跑了一次，中间各种心酸各种泪 ...
