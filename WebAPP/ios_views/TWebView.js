//引入 React
import React, { Component } from 'react';
//引入 React Native 组件和 API
import {
  StyleSheet,
  Text,
  View,
  WebView
} from 'react-native';

class tWebView extends Component{
    constructor(props){
        super(props);
        this.state = {
            url: this.props.url,
            isError: false
        }
    }

    render(){
       return(
          // if else
            <View style={styles.container}>
            {
                this.state.isError?
                    <View style={styles.errorInfo}>
                        <Text style={styles.text}>网络有问题，请检查网络情况，再刷新</Text>
                    </View>
                    :
                    <WebView onError={this._showError.bind(this)} source={{uri: this.state.url}} style={{marginTop:0}}
                    startInLoadingState={true}></WebView>
            }
            </View>
       );
    }

    _showError(){
        this.setState({
            isError: true
        });
    }
}

// StyleSheet 样式类  const 常量且不可改变
const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    errorInfo:{
        marginTop: 100,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text:{
        fontSize: 16,
        fontWeight: '300'
    }
});

module.exports = tWebView;