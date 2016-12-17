//引入 React
import React, { Component } from 'react';
//引入 React Native 组件和 API
import {
  StyleSheet,
  Text,
  View,
  WebView
} from 'react-native';

// 自定义 TWebView 方法
class TWebView extends Component{

    // constructor 方法
    constructor(props){
        super(props);
        this.state={
            url: this.props.url,
            isError: false
        }
    }

    // 渲染视图
    render(){
        return(

            /*
            * {} if else,且里面可以写组件
            * onError 错误提示，告诉开发者
            * _showError 显示错误提示方法
            * startInLoadingState={true} 缓冲加载
            * source Url 源
            */

            <View style={styles.container}>
            {
                this.state.isError?
                    <View style={styles.errorInfo}>
                        <Text style={styles.errorInfoText}>网络异常，请检查网络状态，再刷新</Text>
                    </View>
                :
                    <WebView
                    onError={this._showError.bind(this)}
                    startInLoadingState={true}
                    source={{uri: this.props.url}}
                    style={{marginTop: -20}}
                    />
            }
            </View>
        );
    }
    // _showError 显示错误提示方法
    _showError(){
        this.setState({
            isError: true
        })  
    }
}

// 创建样式类，const常量且不可改变
const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    errorInfo:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
        //flexDirection: 'row'
    },
    errorInfoText:{
        fontSize: 16,
        fontWeight: '300'
    }
})

module.exports = TWebView;