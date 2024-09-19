import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Button,Text, useWindowDimensions, View } from 'react-native';
import Apps from './src/App';
import { List, Title } from 'react-native-paper';
import Red from './src/navigation/RedScrn';
import Panda from './PanDascrn';
import { TabView,SceneMap } from 'react-native-tab-view';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import App from './src/App';
import React from 'react';
import { Image } from 'react-native';
import styles from './src/styles';
import Icon from 'react-native-vector-icons/Ionicons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const TTabs = createMaterialTopTabNavigator();
function TabTop(){
    return(
        <TTabs.Navigator
            screenOptions={{
                tabBarLabelStyle: { fontSize: 12 },
                tabBarItemStyle: { width: 100 },
                tabBarStyle: { backgroundColor: 'powderblue' ,height:65},
                
            }}
        >
            <TTabs.Screen name = 'homeSRn' component={StartView} options={{
                tabBarIcon:()=>{
                    return <Icon name = 'home' size = {20}></Icon>
                }
            }}>
            </TTabs.Screen>
            <TTabs.Screen name = 'notice' component={NoticeView} options={{
                tabBarIcon:()=>{
                    return <Icon name = 'notifications' size = {20}></Icon>
                }
            }}>
            </TTabs.Screen>
        </TTabs.Navigator>
    );
}
const Tabs = createBottomTabNavigator();
const TabBottom =()=>{
    return(
        <Tabs.Navigator>
            <Tabs.Screen name={'Home'} component={TabTop} options={
                {
                    headerShown:false,
                    tabBarIcon:()=>{
                          return <Icon name = 'home' size = {30}></Icon>        
                    }
                }
            }>
            </Tabs.Screen>
            <Tabs.Screen name={'Settings'} component={Red} options={
                {
                    tabBarIcon:()=>{
                        return <Icon name = 'cog' size = {30}></Icon>
                    }
                }
            }
            ></Tabs.Screen>
            <Tabs.Screen name={'Chat'} component={Panda} options={
                {
                    tabBarIcon:()=>{
                            return <Icon name = 'chatbox' size = {30}></Icon>
                    }
                    
                }
            }></Tabs.Screen>
        </Tabs.Navigator>
    );
}
const StartView =()=>{
    return(
    <View style={{flex:1,color:'white'}}>
                    <Text style={{alignContent:'center',justifyContent:'center',textAlign:'center',fontSize:30}}>HI</Text>
                </View>
    );
}
const NoticeView=()=>{
    return(
        <View style={{flex:1,color:'white'}}>
                    <Text style={{alignContent:'center',justifyContent:'center',textAlign:'center',fontSize:30}}>notice here</Text>

                </View>
    );
}

export default function AppContainer() {
    return (
        <NavigationContainer>
            <TabBottom />
        </NavigationContainer>
    );
}