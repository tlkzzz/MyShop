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
    ScrollView,
    TextInput,
} from 'react-native';


const {width,height} = Dimensions.get('window');
import Icon from 'react-native-vector-icons/Ionicons';
// import CheckBox from './checkbox'/**/
import CheckBox from 'react-native-check-box'
import {carArry} from './data'

let data={id:65,checked:true};


export default class Car extends Component {

    static navigationOptions = {
        header: null
    };
    constructor(props){
        super(props);
    }



    onClick(data){

      // let is=  data.checked ?  this.setState({checked:false}): this.setState({checked:true});

    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.v1}>
                    <Text style={styles.t1}>购物车</Text>
                </View>

                <ScrollView >

                    <View style={styles.itemstyle}>
                        <View style={styles.checkeds}>
                            <CheckBox
                                style={{flex: 1, padding: 10 }}
                                onClick={()=>this.onClick(carArry)}
                                isChecked={ true}
                            />
                        </View>
                        <Image style={styles.i2} source={require('./../../img/6.jpg')}/>
                        <View style={styles.vthstyle}>
                          <View style={styles.vthsstyle}>
                              <Text style={styles.ts1}>动向装70%月牙骨25kg动向装70%月牙骨25kg动向装70%月牙骨25kg</Text>
                          </View>
                            <View style={styles.vststyle}>
                                <View style={styles.vststyle1}>
                            <Text style={styles.ts2}>10千克起订</Text>
                            <Text style={styles.ts3}>￥20.00/千克</Text>
                                </View>
                                <View style={styles.vststyle2}>
                                    <View style={styles.iconstyles}>
                                    <Icon name="md-remove" size={20}  style={{color:'#FFFFFF',}}/>
                                    </View>
                                   <TextInput
                                       defaultValue="100"
                                       style={styles.textinputstyle}/>
                                    <View style={styles.iconstyles}>
                                    <Icon name="md-add" size={20} style={{color:'#FFFFFF'}}/>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View style={styles.itemstyle}>
                        <View style={styles.checkeds}>
                            <CheckBox
                                style={{flex: 1, padding: 10 }}
                                onClick={()=>this.onClick(carArry)}
                                isChecked={false}
                            />
                        </View>
                        <Image style={styles.i2} source={require('./../../img/6.jpg')}/>
                        <View style={styles.vthstyle}>
                            <View style={styles.vthsstyle}>
                                <Text style={styles.ts1}>动向装70%月牙骨25kg</Text>
                            </View>
                            <View style={styles.vststyle}>
                                <View style={styles.vststyle1}>
                                    <Text style={styles.ts2}>10千克起订</Text>
                                    <Text style={styles.ts3}>￥20.00/千克</Text>
                                </View>
                                <View style={styles.vststyle2}>
                                    <View style={styles.iconstyles}>
                                        <Icon name="md-remove" size={20}  style={{color:'#FFFFFF',}}/>
                                    </View>
                                    <TextInput
                                        defaultValue="100"
                                        style={styles.textinputstyle}/>
                                    <View style={styles.iconstyles}>
                                        <Icon name="md-add" size={20} style={{color:'#FFFFFF'}}/>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>

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
    v1 :{
        flexDirection : 'row',
        height:40,
        width : width,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#EAE9F0',
        // marginBottom:10,
    },
    t1 :{
        fontSize:15,
        color : '#FA2F37'
    },
    itemstyle : {
        flexDirection:'row',
        height:80,
        width:width,
        alignItems:'center',
        backgroundColor:'#FFFFFF',
        borderBottomWidth:0.5,
        borderColor:'#B9B9B9',
    },
    checkeds :{
      width:50,
      height:50,
      justifyContent:'center',
      alignItems:'center',
    },
    i2 :{
        width:70,
        height:70,
    },
    vthstyle :{
      width:width-120,
      height:80,
      justifyContent:'center',
        marginLeft:6,
    },
    vthsstyle :{
        height:37,
        width:width-140,
    },
    ts1 :{
        fontSize:15,
        color:'#828282',
    },
    ts2 :{
        fontSize:10,
        color:'#828282',
        marginLeft:2,
    },
    ts3 :{
        fontSize:16,
        color:'#D50D32',
    },
    vststyle :{
        width :width-140,
        height: 37,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
    },
    vststyle1 :{
        width :(width-140)/2,
        height: 37,
        // alignItems:'center',
        justifyContent:'center',
    },
    vststyle2 :{
        width :(width-140)/2,
        height: 37,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        paddingTop:12,
    },
    textinputstyle:{
        height:35,
        width:60,
        // borderColor: '#000000',
        // borderBottomWidth: 0.5
        marginTop:5,
    },
    iconstyles :{
        height:20,
        width:20,
        borderRadius:10,
        backgroundColor:'#D50D32',
        justifyContent:'center',
        alignItems:'center',
    }
});

