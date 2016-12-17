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

<<<<<<< HEAD
import TwebView from './TWebView';
=======
import TwebView from './TwebView';
>>>>>>> b084fb449f84b081717a28e8b9d7cd3620309e96

class BathroomPage extends Component{
    render(){
        // 必须返回元素 <TwebView url="https://xxx.github.com/facebook/react-native"/>
        return(
            <View style={styles.container}>
<<<<<<< HEAD
                <TwebView url="{require('../html/nearby.html')} "/>
=======
                <TwebView url="https://github.com/facebook/react-native"/>
>>>>>>> b084fb449f84b081717a28e8b9d7cd3620309e96
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