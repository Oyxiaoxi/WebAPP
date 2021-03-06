//引入 React
import React, { Component } from 'react';
//引入 React Native 组件和 API
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  WebView
} from 'react-native';

import TwebView from './TWebView';


class BathroomPage extends Component{
    render(){
        // 必须返回元素  <TwebView url="{require('../html/nearby.html')} "/>
        return(
            <View style={styles.container}>
                <TwebView url="https://github.com/facebook/react-native"/>
            </View>
        );
    }
}


// StyleSheet 样式类
const styles = StyleSheet.create({
    container:{
        flex:1
    }
});

module.exports = BathroomPage;