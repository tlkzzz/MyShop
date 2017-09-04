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
    View
} from 'react-native';

//导入页面中的常量
import {Navigator} from './app';

AppRegistry.registerComponent('MyShop', () => Navigator);