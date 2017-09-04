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
    Image,
    Platform
} from 'react-native';

import Home from './Component/Home/home';
import List from './Component/List/list';
import Car from './Component/Car/car';
import My from './Component/My/my';
import Sss from './Component/Home/swiper';
import Serch from './Component/List/serch';
import Goods from './Component/Home/goods';

import { StackNavigator,TabNavigator } from 'react-navigation';


// 注册tabs
const Main = TabNavigator({
    Home: {
        screen: Home,
        navigationOptions: {  // 也可以写在组件的static navigationOptions内
            tabBarLabel: '首页',
            // tabBarIcon: ({ tintColor }) => (
            //         <Image
            //      source={require('./img/icon_mine.png')}
            // style={[styles.icon, {tintColor: tintColor}]}
            //     />
            //     ),
        }
    },
    List: {
        screen: List,
        navigationOptions: {
            tabBarLabel: '分类',
            // tabBarIcon: ({ tintColor }) => (
            //     <Image
            //         source={require('./img/icon_mine.png')}
            //         style={[styles.icon, {tintColor: tintColor}]}
            //     />
            // ),
        }
    },
    Car: {
        screen: Car,
        navigationOptions: {
            tabBarLabel: '购物车',
            // tabBarIcon: ({ tintColor }) => (
            //     <Image
            //         source={require('./img/icon_more.png')}
            //         style={[styles.icon, {tintColor: tintColor}]}
            //     />
            // ),
        }
    },
    My: {
        screen: My,
        navigationOptions: {
            tabBarLabel: '我的',
            // tabBarIcon: ({ tintColor }) => (
            //     <Image
            //         source={require('./img/icon_normal.png')}
            //         style={[styles.icon, {tintColor: tintColor}]}
            //     />
            // ),
        }
    }
}, {

    animationEnabled: false, // 切换页面时是否有动画效果
    tabBarPosition: 'bottom', // 显示在底端，android 默认是显示在页面顶端的
    swipeEnabled: true, // 是否可以左右滑动切换tab
    backBehavior: 'none', // 按 back 键是否跳转到第一个Tab(首页)， none 为不跳转
    tabBarOptions: {
        activeTintColor: '#FA2F37', // 文字和图片选中颜色
        inactiveTintColor: '#999', // 文字和图片未选中颜色
        showIcon: true, // android 默认不显示 icon, 需要设置为 true 才会显示
        indicatorStyle: {
            height: 0  // 如TabBar下面显示有一条线，可以设高度为0后隐藏
        },
        style: {
            backgroundColor: '#fff', // TabBar 背景色
            // height: 44
        },
        labelStyle: {
            fontSize: 13, // 文字大小
        },
    },
});






//设置路由
export const Navigator = StackNavigator(

    {     //第一个页面Tab 页面
        // Main:{screen:Main},
        // Xqy:{screen:Xqy,
        //     navigationOptions:{
        //         headerTitle:'详情', /*设置头部名称*/
        // headerRight : (<Button title="设置"/>),  /*设置右侧按钮*/
        // }},
        Main:{screen:Main},
        Goods : {screen : Goods},
        Serch:{screen : Serch},
    },

    {
        //全局变量设置
        navigationOptions: {  // 屏幕导航的默认选项, 也可以在组件内用 static navigationOptions 设置(会覆盖此处的设置)
            headerTitleStyle : {alignSelf:'center'}, /*设置头部居中显示*/
            headerStyle:{
                backgroundColor:'#ee735c' /*背景颜色*/
            },
            gesturesEnabled: true,/*是否允许左滑返回*/
        },
        mode: 'card',  // 页面切换模式, 左右是card(相当于iOS中的push效果), 上下是modal(相当于iOS中的modal效果)
        onTransitionStart: ()=>{ console.log('导航栏切换开始'); },  // 回调
        onTransitionEnd :  ()=>{ console.log('导航栏切换结束') },

    });

const styles = StyleSheet.create({
    icon: {
        width: 35,
        height:35,
    },
});

