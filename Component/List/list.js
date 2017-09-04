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
    ScrollView,
    Image,
    ListView,
} from 'react-native';



const {width,height} = Dimensions.get('window');

import Icon from 'react-native-vector-icons/Ionicons';
import Titleserch from "./titleserch";


export default class List extends Component {

    static navigationOptions = {
        header: null
    };
    constructor(props){
        super(props);
    }



    render() {
        return (
            <View style={styles.container}>

                <Titleserch navigation={this.props.navigation}/>

              <View style={styles.conterstyle}>
                  <View style={styles.leftstyle}>
                        <ScrollView>
                         <View style={styles.itemstyle}>
                           <Text style={styles.textstyle}>零食</Text>
                         </View>
                            <View style={styles.itemstyle}>
                                <Text style={styles.textstyle}>零食</Text>
                            </View>
                            <View style={styles.itemstyle}>
                                <Text style={styles.textstyle}>零食</Text>
                            </View>
                            <View style={styles.itemstyle}>
                                <Text style={styles.textstyle}>零食</Text>
                            </View>
                            <View style={styles.itemstyle}>
                                <Text style={styles.textstyle}>零食</Text>
                            </View>
                            <View style={styles.itemstyle}>
                                <Text style={styles.textstyle}>零食</Text>
                            </View>

                        </ScrollView>

                  </View>





                  <View style={styles.rightstyle}>

                        <View  style={styles.vserstyle}>

                            <View  style={styles.vseritemstyle}>
                                <Text  style={[styles.vsertextstyle,{color:'red'}]}>全部</Text>
                            </View>
                            <View  style={styles.vseritemstyle}>
                                <Text  style={styles.vsertextstyle}>价格</Text>
                            </View>
                            <View  style={styles.vseritemstyle}>
                                <Text  style={styles.vsertextstyle}>销量</Text>
                            </View>


                        </View>




                      





                        <View style={styles.viewlistyle}>
                            <ScrollView   contentContainerStyle={styles.contentContainer}>
                              <View  style={styles.viewliststyle}>
                                   <Image source={require('./../../img/8.png')} style={styles.imageliststyle}/>
                                   <View style={styles.viewtextstyle}>
                                       <View style={styles.viewtextnamestyle}>
                                       <Text style={styles.text1style}>商品名称商品名称商品名称商品名称商品名称</Text>
                                       </View>
                                       <Text style={styles.text3style}>￥20.00</Text>
                                       <Text style={styles.text2style}>已售:1000</Text>
                                       <Icon style={styles.iconstyle}  name="md-cart" size={18} color="#FA2F37"/>
                                   </View>
                              </View>

                                <View  style={styles.viewliststyle}>
                                    <Image source={require('./../../img/8.png')} style={styles.imageliststyle}/>
                                    <View style={styles.viewtextstyle}>
                                        <View style={styles.viewtextnamestyle}>
                                            <Text style={styles.text1style}>商品名称商品名称商品名称商品名称商品名称</Text>
                                        </View>
                                        <Text style={styles.text3style}>￥20.00</Text>
                                        <Text style={styles.text2style}>已售:1000</Text>
                                        <Icon style={styles.iconstyle}  name="md-cart" size={18} color="#FA2F37"/>
                                    </View>
                                </View>

                                <View  style={styles.viewliststyle}>
                                    <Image source={require('./../../img/8.png')} style={styles.imageliststyle}/>
                                    <View style={styles.viewtextstyle}>
                                        <View style={styles.viewtextnamestyle}>
                                            <Text style={styles.text1style}>商品名称商品名称商品名称商品名称商品名称</Text>
                                        </View>
                                        <Text style={styles.text3style}>￥20.00</Text>
                                        <Text style={styles.text2style}>已售:1000</Text>
                                        <Icon style={styles.iconstyle}  name="md-cart" size={18} color="#FA2F37"/>
                                    </View>
                                </View>






                            </ScrollView>
                        </View>
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
    conterstyle : {
        flexDirection: 'row',
        width : width,
    },
    leftstyle: {
       width :width*(1/4),
        backgroundColor: '#F6F4F5',
    },
    rightstyle : {
        width : width*(3/4),
        height: height,
        backgroundColor: '#FFFFFF',
    },
    itemstyle : {
        height:35,
        width: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textstyle : {
        fontSize: 14,
        color :'#6F6D6E',
        textAlign: 'center',
    },
    vserstyle : {
        height: 30,
        // width : width*(3/4)/3,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth:0.3,
        borderColor:'#E9E9E9',
    },
    vseritemstyle: {
        height:25,
        width : width*(3/4)/3+1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRightWidth:1,

        borderColor:'#E9E9E9',
    },
    vsertextstyle : {
        fontSize: 13,
        color :'#6F6D6E',
        textAlign: 'center',
    },
    viewlistyle : {
        width : width*(3/4),
        justifyContent: 'center',
        alignItems: 'center',
    },
    viewliststyle: {
        flexDirection: 'row',
        height:80,
        width :width*(3/4)-10,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth:0.3,
        borderColor:'#E9E9E9',
    },
    imageliststyle:{
        width:60,
        height:60,
    },
    viewtextstyle :{
        height: 60,
        width : width*(3/4)-80,
        marginLeft:10,
    },
    viewtextnamestyle:{
        height:30,
        width : width*(3/4)-80,
    },

    text1style:{
        fontSize:12,
        color:'#6F6D6E',
    },
    text2style:{
        fontSize:6,
        color:'#C20C0C',
        marginLeft:3,
    },
    text3style:{
        fontSize:15,
        color:'#C20C0C',

    },
    iconstyle :{
        position:'absolute', //局对定位
        bottom :0,  //底部
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
    contentContainer :{
        paddingBottom:130,
    }
});

