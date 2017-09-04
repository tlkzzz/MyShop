import React, { Component } from 'react'
import {
    Text,
    View,
    Image,
    Dimensions,
    StyleSheet,
    RefreshControl,
    ActivityIndicator,
    ScrollView,
} from 'react-native'
import Swiper from 'react-native-swiper'


const { width } = Dimensions.get('window')



export default class Goodsswiper extends Component {

    constructor(props) {
        super(props);
        this.state = {
            swiperShow: false,
            animating:true,
        };
    }


    componentDidMount() {
        setTimeout(() => {
            this.setState({
                swiperShow: true,
                animating:true
            });
        }, 1000)
    }

    render() {

        if (this.state.swiperShow) {
            return (
                <View style={styles.swiper}>
                    <Swiper style={styles.wrapper} height={170} horizontal={true} autoplay>
                        <View style={styles.slide}>
                            <Image resizeMode='stretch' style={styles.image} source={require('./../../img/1.jpg')}/>
                        </View>
                        <View style={styles.slide}>
                            <Image resizeMode='stretch' style={styles.image} source={require('./../../img/2.jpg')}/>
                        </View>
                        <View style={styles.slide}>
                            <Image resizeMode='stretch' style={styles.image} source={require('./../../img/3.jpg')}/>
                        </View>
                    </Swiper>

                </View>
            )
        } else {
            return (
                <View style={styles.swiper}>
                    <ActivityIndicator
                        animating={this.state.animating}
                        style={[{height: 80}]}
                        size="small" />
                </View>
            )
        }
    }
}
const styles = StyleSheet.create ({
    swiper: {
        justifyContent: 'center',
        alignItems: 'center',
        width:width,
        height:170,
    },

    wrapper: {
        width:width,
    },

    slide: {
        width:width,
        height:170,
        justifyContent: 'center',
        alignItems: 'center',
    },

    image: {
        width,
        flex: 1
    }
})