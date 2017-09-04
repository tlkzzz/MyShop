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
    TouchableOpacity
} from 'react-native';



const {width,height} = Dimensions.get('window');
import Icon from 'react-native-vector-icons/Ionicons';

export default class Title extends Component {

    static navigationOptions = {
        header: null
    };
    constructor(props){
        super(props);
    }



    render() {
        return (
            <View style={styles.titlestyle}>
                <Text style={styles.centerstyle}>{this.props.name}</Text>
                <View  style={styles.iconstyle}>
                    <TouchableOpacity onPress={()=>{this.props.navigation.goBack()}}>
                        <Icon name="ios-arrow-back" size={30}/>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    titlestyle :{
        justifyContent: 'center',
        alignItems: 'center',
        width : width,
        height:40,
        backgroundColor:'#F9F9F9',
        borderBottomWidth:0.5,
        borderColor:'#D4D4D4',
    },
    centerstyle : {
        fontSize:15,
        color : '#444444',
    },
    iconstyle :{
        position:'absolute', //局对定位
        top :4,  //底部
        left:7, //右边距离
        width:40,
        height:40,
    }
});

