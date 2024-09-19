
import {View,Text,Button,SafeAreaView,ScrollView, TextInput,TouchableOpacity, Image,useWindowDimensions, ImageBackground} from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from'react-native-vector-icons/Ionicons'
import { NavigationContainer,Navigator } from '@react-navigation/native'
import React, { useState} from 'react';
import styles from './style';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6'
import { createStackNavigator } from '@react-navigation/stack';
import { TabView,SceneMap } from 'react-native-tab-view';
import ScrollableTabView from '@itenl/react-native-scrollable-tabview';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Menu,MenuOption,MenuOptions,MenuProvider,MenuTrigger } from 'react-native-popup-menu';
import { TabBar } from 'react-native-tab-view';
import MainLayout from './MainLayoutHome';
const topTab = createMaterialTopTabNavigator();
const bottomTab = createBottomTabNavigator();
const Stack = createStackNavigator();
import TabTT1 from './MainLayoutChart';
import { Provider } from 'react-redux';
import store from './reduxx/store';
const BottomTab1=()=>{
    return(
        <bottomTab.Navigator screenOptions={()=>({
            tabBarActiveTintColor:'black',
            tabBarInactiveTintColor:'gray',
        })}>
            <bottomTab.Screen name='Trang chủ' component={MainLayout} options={
                {
                    headerShown:false,
                    tabBarIcon:()=>{
                        return <Icon name='home'size={30} ></Icon>
                    }
                }
            }></bottomTab.Screen>
            <bottomTab.Screen name='Thị trường' component={TabTT1} options={
                {
                    headerShown:false,
                    tabBarIcon:()=>{
                        return <Icon name='bar-chart'size={30} ></Icon>
                    }
                }
            }></bottomTab.Screen>
            <bottomTab.Screen name='Giao dịch' component={TransSCRN} options={
                {
                    headerShown:false,
                    tabBarIcon:()=>{
                        return <MaterialCommunityIcons name='transition-masked'size={30} ></MaterialCommunityIcons>
                    }
                }
            }></bottomTab.Screen>
            <bottomTab.Screen name='Futures' component={FuturesSCRN} options={
                {
                    headerShown:false,
                    tabBarIcon:()=>{
                        return <MaterialCommunityIcons name='finance'size={30} ></MaterialCommunityIcons>
                    }
                }
            }></bottomTab.Screen>
             <bottomTab.Screen name='Ví' component={ViSCRN} options={
                {
                    headerShown:false,
                    tabBarIcon:()=>{
                        return <MaterialCommunityIcons name='wallet'size={30} ></MaterialCommunityIcons>
                    }
                }
            }></bottomTab.Screen>
        </bottomTab.Navigator>
    );
}


const TransSCRN=()=>{
    return(
        <View></View>
    );    
}
const FuturesSCRN=()=>{
    return(
        <View></View>
    );    
}
const ViSCRN=()=>{
    return(
        <View></View>
    );    
}

export default function AppContainer() {
    return (
        <Provider store={store}>
            <NavigationContainer >
                <BottomTab1>
                </BottomTab1>
            </NavigationContainer>
        </Provider>
    );
}