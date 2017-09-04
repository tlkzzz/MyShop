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
} from 'react-native';
const {width,height} = Dimensions.get('window');
import Icon from 'react-native-vector-icons/Ionicons';

export default class Flaw extends Component {

    constructor(props){
        super(props);
    }



    render() {
        return (
            <View style={styles.container}>
                <View style={styles.v1}>
                    <Text  style={styles.t1}>全部</Text>
                    <Icon  style={styles.i1}  name="md-more" size={18} color="#FA2F37"/>
                </View>



                <View style={styles.v2}>
                    <View  style={styles.v3}>
                        <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Goods',{_id:'1515151'}); }}>


                        <Image style={styles.i2} source={require('./../../img/6.jpg')}/>
                        <View  style={styles.v5}>
                            <Text style={styles.t2}>花花公子食品好吃花花公子食品好...</Text>
                        </View>
                        <View style={styles.v4}>
                            <Text style={styles.t3}>￥20.00</Text>
                            <Text style={styles.t4}>已售:100225</Text>
                        </View>
                        </TouchableOpacity>
                          <Icon style={styles.iconstyle}  name="md-cart" size={18} color="#FA2F37"/>
                    </View>
                    <View  style={styles.v3}>
                        <Image style={styles.i2} source={require('./../../img/5.jpg')}/>
                        <View  style={styles.v5}>
                            <Text style={styles.t2}>花花公子食品好吃花花公子食品好...</Text>
                        </View>
                        <View style={styles.v4}>
                            <Text style={styles.t3}>￥20.00</Text>
                            <Text style={styles.t4}>已售:100225</Text>
                        </View>

                        <Icon style={styles.iconstyle}  name="md-cart" size={18} color="#FA2F37"/>
                    </View>
                </View>

                <View style={styles.v2}>
                    <View  style={styles.v3}>
                        <Image style={styles.i2} source={require('./../../img/7.jpg')}/>
                        <View  style={styles.v5}>
                            <Text style={styles.t2}>花花公子食品好吃花花公子食品好...</Text>
                        </View>
                        <View style={styles.v4}>
                            <Text style={styles.t3}>￥20.00</Text>
                            <Text style={styles.t4}>已售:100225</Text>
                        </View>

                        <Icon style={styles.iconstyle}  name="md-cart" size={18} color="#FA2F37"/>
                    </View>
                    <View  style={styles.v3}>
                        <Image style={styles.i2} source={require('./../../img/1.jpg')}/>
                        <View  style={styles.v5}>
                            <Text style={styles.t2}>花花公子食品好吃花花公子食品好...</Text>
                        </View>
                        <View style={styles.v4}>
                            <Text style={styles.t3}>￥20.00</Text>
                            <Text style={styles.t4}>已售:100225</Text>
                        </View>

                        <Icon style={styles.iconstyle}  name="md-cart" size={18} color="#FA2F37"/>
                    </View>

                </View>

                <View style={styles.v2}>
                    <View  style={styles.v3}>
                        <Image style={styles.i2} source={require('./../../img/1.jpg')}/>
                        <View  style={styles.v5}>
                            <Text style={styles.t2}>花花公子食品好吃花花公子食品好...</Text>
                        </View>
                        <View style={styles.v4}>
                            <Text style={styles.t3}>￥20.00</Text>
                            <Text style={styles.t4}>已售:100225</Text>
                        </View>

                        <Icon style={styles.iconstyle}  name="md-cart" size={18} color="#FA2F37"/>
                    </View>



                </View>




            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },

    v1 : {
        width : width,
        height : 40,
        flexDirection : 'row',
        justifyContent:'space-between',
        alignItems: 'center',

    },
    t1 : {
        fontSize : 14,
        marginLeft:15,
        color : '#A2A2A2',
    },
    i1 : {
        marginRight:15,
    },
    v2 : {
      flexDirection:'row',
        width: width,
        justifyContent:'space-between',
        marginTop:-10,
    },
    v3 : {
        width: width/2-20,
        height:200,
        borderRadius :10,
        borderWidth:1,
        borderColor:'#D4D4D4',
        backgroundColor : '#FFFFFF',
        margin:10,
    },
    i2 : {
        width: width/2-22,
        height:120,
        // borderRadius:10,
        borderTopLeftRadius:10,
        borderTopRightRadius:10,

    },
    t2 : {
        fontSize:14,
        color:'#828282',
        margin:5,
        paddingLeft:5,
        paddingRight:10,
    },
    v4 :{
        width: width/2-10,
        height : 35,
        // flexDirection : 'row',
        justifyContent:'center',
        alignItems: 'flex-start',
        // marginTop: -10,
    },
    t3 :{
        fontSize : 15,
        color : '#C20C0C',
        marginLeft:10,
    },
    t4 : {
        fontSize : 8,
        color : '#C20C0C',
        marginLeft:13,
        // marginTop:3,
    },
    v5: {
        width: width/2-20,
        height : 40,
    },
    iconstyle :{
        position:'absolute', //局对定位
        bottom :7,  //底部
        right:5, //右边距离
        width:25,
        height:25,
        backgroundColor:'red',
        paddingTop:5,
        paddingLeft:5,  //设置中间图标的位置
        borderRadius:12.5, //设置圆角
        // borderColor:'#757575',  //边框颜色
        // borderWidth:1,   //边框粗细
        color:'#FFFFFF',  //图标颜色
    },
});

