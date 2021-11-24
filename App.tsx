import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Home from './screens/Status';

import Settings from './screens/Calls';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from "@react-navigation/stack"
import { LIGHT_COLOR, PRIMARY, PRIMARY_DARK} from './constants/colors'
import Main from './Main/Main';


export default function App() {
  return <Main />;
}
