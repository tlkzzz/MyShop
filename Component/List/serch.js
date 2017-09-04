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
    TextInput,
    TouchableOpacity,
    ScrollView
} from 'react-native';


const {width,height} = Dimensions.get('window');
import Icon from 'react-native-vector-icons/Ionicons';
import Nomore from './nomore'
export default class Serch extends Component {

    static navigationOptions = {
        header: null
    };
    constructor(props){
        super(props);
        this.state={
            textvalue:this.props.navigation.state.params.info
        }

    }
    _cler=()=>{
      this.setState({textvalue:''})
    }


    render() {
        return (
            <View style={styles.container}>
                {/*<Text style={styles.welcome}>*/}
                    {/*{this.props.navigation.state.params.info}*/}
                {/*</Text>*/}

                {/*头部导航*/}
               <View style={styles.title}>
                   <TouchableOpacity onPress={()=>{this.props.navigation.goBack()}}>
                  <View style={styles.leftstyles}>
                      <Icon name="ios-arrow-back" size={30}/>
                  </View>
                   </TouchableOpacity>

                   <View style={styles.centerstyle}>
                     <TextInput placeholder="请输入关键字搜索" value={this.state.textvalue} style={styles.inputstyle}></TextInput>
                       <TouchableOpacity onPress={this._cler}>
                    <View style={styles.cearlstyle}>
                       <Icon name="md-close" size={12} style={{color:'#FFFFFF'}}/>
                    </View>
                       </TouchableOpacity>
                   </View>

                   <View style={styles.rightstyles}>
                       <Icon name="ios-search-outline" size={28} />
                   </View>
               </View>

                <View style={styles.containerstyle}>

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
                                        <Text style={styles.text1style}>商品名称商品名称商品名称商品名称商品名称名称商品名称商品名称名称商品名称商品名称</Text>
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
                                        <Text style={styles.text1style}>商品名称商品名称商品名称商品名称商品名称名称商品名称商品名称名称商品名称商品名称</Text>
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
                                        <Text style={styles.text1style}>商品名称商品名称商品名称商品名称商品名称名称商品名称商品名称名称商品名称商品名称</Text>
                                    </View>
                                    <Text style={styles.text3style}>￥20.00</Text>
                                    <Text style={styles.text2style}>已售:1000</Text>
                                    <Icon style={styles.iconstyle}  name="md-cart" size={18} color="#FA2F37"/>
                                </View>
                            </View>



                            {/*没有跟多啦*/}
                           <Nomore/>







                        </ScrollView>
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
        backgroundColor: '#FFFFFF',
    },

    title : {
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor:'#E5E5E5',
        width:width,
        height:40,
        borderBottomWidth:0.5,
        borderColor:'#BDBDBD',
    },
    leftstyles : {
        width:36,
        height:36,
        justifyContent: 'center',
        alignItems: 'center',
    },
    centerstyle:{
        width:width-80,
        height:32,
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor:'#FFFFFF',
        borderRadius:5,
    },
    rightstyles:{
        width:36,
        height:36,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputstyle : {
      width:width-100,
      height:40,
    },
    cearlstyle:{
        width:12,
        height:12,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'#CECECE',
        borderRadius:6,
        marginRight:5,
    },
    containerstyle:{
        width:width,
        backgroundColor:'#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center',
    },
    vserstyle : {
        height: 35,
        width : width,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth:0.3,
        borderColor:'#E9E9E9',
    },
    vseritemstyle: {
        height:25,
        width : width/3+1,
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
        width : width,
        justifyContent: 'center',
        alignItems: 'center',
    },
    viewliststyle: {
        flexDirection: 'row',
        height:80,
        width :width-10,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth:0.3,
        borderColor:'#E9E9E9',
    },
    imageliststyle:{
        width:70,
        height:70,
    },
    viewtextstyle :{
        height: 60,
        width : width-80,
        marginLeft:10,
    },
    viewtextnamestyle:{
        height:30,
        width : width-90,
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

