/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
//引入 React
import React, { Component } from 'react';
//引入 React Native 组件和 API
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';
// 创建一个组件，class extends
export default class WebAPP extends Component {
  // 渲染视图
  render() {
    return (
      // jsx 语法
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
        <Text style={{color:'red',fontSize:50}}>Hello World</Text>
      </View>
    );
  }
}
// StyleSheet 样式类
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
// AppRegistry API
// 注册应用入口
AppRegistry.registerComponent('WebAPP', () => WebAPP);
