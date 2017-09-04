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
    Image,
    TouchableOpacity,
    ScrollView,
} from 'react-native';

import Title from './title'
import Goodsseiper from './goodsswiper'
const {width,height} = Dimensions.get('window');
import Icon from 'react-native-vector-icons/Ionicons';
import Xq from "./xq";

export default class Goods extends Component {

    static navigationOptions = {
        header: null
    };
    constructor(props){
        super(props);
    }



    render() {
        return (
            <View style={styles.container}>

                <Title navigation={this.props.navigation} name="商品详情"/>




                <ScrollView>
                <Goodsseiper></Goodsseiper>

                    <Xq></Xq>


                </ScrollView>




            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#F6F4F5',
    },
});

