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

export default class My extends Component {

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
                   我的
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
        backgroundColor: '#EAE9F0',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
});

