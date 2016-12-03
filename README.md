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

[facebook.github.io/react-native](官网)

```bash
npm install watchman
sudo npm install -g react-native-cli 
react-native init AwesomeProject //创建项目
cd AwesomeProject
react-native run-ios // 运行
```