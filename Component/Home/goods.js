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


            <View style={styles.footstyle}>
                <View style={styles.footleftstyle}>
                    <View style={styles.v1s}>
                        <Icon name="ios-star-outline" size={18}/>
                        <Text style={styles.tsstyle}>收藏</Text>

                    </View>
                    <View style={styles.v1s}>
                        <Icon name="ios-chatbubbles-outline" size={18}/>
                        <Text style={styles.tsstyle}>客服</Text>
                    </View>
                    <View style={styles.v1s}>
                        <Icon name="ios-basket-outline" size={18}/>
                        <Text style={styles.tsstyle}>购物车</Text>

                    </View>


                </View>





                <View style={styles.footsbuttenstyle}>
                    <Text style={styles.footstextstyle}>加入购物车</Text>
                </View>
            </View>

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
    footstyle : {
        position:'absolute', //局对定位
        bottom :0,  //底部
        width:width,
        height:40,
        backgroundColor:'#FFFFFF',
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    footleftstyle : {
        width:width/2,
        height:40,
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems: 'center',

    },
    footsbuttenstyle : {
        width:width/2,
        height:40,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#FB8C2D',
    },
    footstextstyle : {
        fontSize:15,
        color:'#FFFFFF'
    },
    v1s :{
        width:width/2*(1/3)+1,
        height:40,
        borderRightWidth:0.5,
        borderColor:'#B9B9B9',
        justifyContent: 'center',
        alignItems: 'center',
    },
    tsstyle : {
        fontSize:10,
        color:'#B9B9B9',
    }
});

