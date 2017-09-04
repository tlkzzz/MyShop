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
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
const {width,height} = Dimensions.get('window');

export default class Titleserch extends Component {

    constructor(props){
        super(props);
    }

    _serch=()=>{

        this.props.navigation.navigate('Serch',{info:'搜索'});


    }





    render() {
        return (
            <View style={styles.container}>
                <View style={styles.viewliftstyle}>
                    <Icon name="ios-locate-outline" size={20}/>
                    <Text style={styles.textliftstyle}>长沙市</Text>
                </View>


                <View style={styles.viewcenterstyle}>
                    <Icon name="ios-search-outline" size={20} style={{marginLeft:5}}/>
                    <TextInput placeholder="请输入关键字搜索" style={styles.textinputstyle}></TextInput>
                </View>


                <View style={styles.viewrigthstyle}>
                    <TouchableOpacity onPress={this._serch}>
                    <Icon  name="ios-funnel-outline" size={20}/>
                    <Text style={styles.textrigthstyle}>筛选</Text>
                    </TouchableOpacity>
                </View>





            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#E5E5E5',
        width :width,
        height:40,
    },
    viewliftstyle : {
        height : 30,
        width :30,
        justifyContent:'center',
        alignItems:'center',
        marginLeft:5,
    },
    textliftstyle : {
        fontSize:9,
        color : '#3A3A3A',
    },
    viewcenterstyle:{
        flexDirection:'row',
        backgroundColor:'#FFFFFF',
        height:30,
        width :width-80,
        // justifyContent:'center',
        alignItems : 'center',
        borderRadius:20,
    },
    textinputstyle : {
        height:40,
        width:width-100,
    },
    viewrigthstyle : {
        height:30,
        width :30,
        justifyContent:'center',
        alignItems : 'center',
        marginRight:5,
    },
    textrigthstyle : {
        fontSize:9,
        color : '#3A3A3A',
    }


});

