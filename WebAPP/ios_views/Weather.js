//引入 React
import React, { Component } from 'react';
//引入 React Native 组件和 API
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

class Weather extends Component{
    render(){
        // 必须返回元素
        return(
            <View>
                <Text style={styles.Text}>
                    Weather
                </Text>
            </View>
        );
    }
}

// StyleSheet 样式类
const styles = StyleSheet.create({
    Text:{
        fontSize:40
    }
});

module.exports = Weather;