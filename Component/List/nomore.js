/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Dimensions,
    Image
} from 'react-native';


const {width,height} = Dimensions.get('window');

export default class Nomore extends Component {

    static navigationOptions = {
        header: null
    };
    constructor(props){
        super(props);
    }



    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    没有更多啦~
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        height:30,
    },
    welcome: {
        fontSize: 13,
        textAlign: 'center',
        color:'#B9B9B9',
    },
});

