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
    ScrollView,
    Image,
    Dimensions,
} from 'react-native';



const {width,height} = Dimensions.get('window');
import Icon from 'react-native-vector-icons/Ionicons';


import Sss from './swiper';
import Flaw from './flaw';

export default class Home extends Component {

    static navigationOptions = {
        header: null
    };
    constructor(props){
        super(props);
    }



    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <View style={styles.v1}>
                    <Text style={styles.t1}>首页</Text>
                </View>



                {/*楼层商品*/}
                <ScrollView>
                    <Sss/>


                   <Flaw navigation={this.props.navigation}></Flaw>


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
    },
    t1 :{
        fontSize:15,
        color : '#FA2F37'
    },
    s1 :{
        width :width,
    },

});

