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
import Icon from 'react-native-vector-icons/Ionicons';

const {width,height} = Dimensions.get('window');

export default class Xq extends Component {

    static navigationOptions = {
        header: null
    };
    constructor(props){
        super(props);
    }



    render() {
        return (
            <View style={styles.container}>

                <View style={styles.goodsname}>
                    <View style={styles.towname}>
                    <View style={styles.namestyle}>
                    <Text style={styles.textnamestyle}>中国好商品前腿肉中国好商品前腿肉中国好商品前腿肉中国好商品前腿肉</Text>
                    </View>
                     <View style={styles.fxstyle}>
                       <Icon name="md-share" size={20}/>
                       <Text style={styles.fxtextstyle}>分享</Text>
                     </View>
                    </View>
                    <View style={styles.namesstyle}>
                    <Text style={styles.textnamesstyle}>中国好商品前腿肉升水中国好商品前腿肉升水中国好商品前腿肉升水品前腿肉升水</Text>
                    </View>
                </View>

                <View style={styles.jestyles}>
                    <View style={styles.jetextstyle}>
                        <View style={styles.jetextstyle2}>
                    <Text style={styles.textstyleje1}>价格：</Text><Text style={styles.textstyleje2}>20.00/瓶</Text>
                            <Text style={styles.textstyleje4}>(5瓶起批)</Text>
                        </View>
                        <View  style={styles.jetextstyle3}>
                     <Text style={styles.textstyleje3}><Text style={{color:'#2597FF'}}>登陆</Text>查看专属价</Text>
                        </View>
                    </View>

                   <View  style={styles.threestyle}>
                       <Text style={styles.textthreestyle}>运费：￥10</Text>
                       <Text style={styles.textthreestyle}>销量：1000</Text>
                       <Text style={styles.textthreestyle}>发货地：长沙市</Text>
                   </View>


                </View>


                {/*<View>   </View>*/}


            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width:width,
        justifyContent: 'center',
        alignItems: 'center',
    },
    goodsname :{
        width : width,
        height:70,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#FFFFFF',
    },
    towname:{
        width : width,
        height:40,
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    namestyle :{
        paddingLeft:10,
        width : width-80,
        height : 40,

    },
    textnamestyle : {
        fontSize: 15,
        color : '#565656',
    },
    namesstyle : {
        width : width-20,
        height : 15,
    },
    textnamesstyle: {
        fontSize: 10,
        color : '#DA596C',
    },
    fxstyle : {
        width: 45,
        height: 35,
        justifyContent: 'center',
        alignItems: 'center',
        borderLeftWidth:1,
        borderColor:'#EFEFEF',
    },
    fxtextstyle :{
        fontSize:10,
        color:'#686868',
    },
    jestyles : {
        width:width,
        height:50,
        marginTop:5,
        // justifyContent: 'center',
        // alignItems:'center',
        backgroundColor:'#FFFFFF',
    },
    jetextstyle:{
        height:30,
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    jetextstyle2:{
        height:30,
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    textstyleje1:{
        fontSize:10,
        color:'#686868',
        marginLeft:10,
        marginTop:3,

    },
    textstyleje2:{
        fontSize:15,
        color:'#C20C0C',
        // marginLeft:10,
    },
    textstyleje4:{
        fontSize:8,
        color:'#686868',
        marginLeft:10,
        marginTop:3,
    },
    textstyleje3:{
        fontSize:15,
        color:'#686868',
    },
    jetextstyle3:{
        paddingRight:10,
    },

    threestyle:{
        width:width,
        height:10,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems: 'center',
    },
    textthreestyle:{
        fontSize:8,
        color:'#9A9A9A',
        marginLeft:10,
        marginRight:10,
    }

});

