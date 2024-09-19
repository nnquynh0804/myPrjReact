import {View,Text,Button,SafeAreaView,ScrollView, TextInput,TouchableOpacity, Image,useWindowDimensions, ImageBackground} from 'react-native'
import React, { useState} from 'react';
import { TabView,SceneMap } from 'react-native-tab-view';
import { TabBar } from 'react-native-tab-view';
import { useDispatch, useSelector } from 'react-redux';
import { setTabIndex } from '../code/reduxx/tabSlice';
import Earn from './ChartTabKPTab1';
const KhamPha=()=>{
    const layout = useWindowDimensions();
  
    const { index, routes } = useSelector(state => state.tab);
    const dispatch = useDispatch();

    const handleIndexChange = (newIndex) => {
        dispatch(setTabIndex(newIndex));
    };
  
      const renderScene = SceneMap({
          earn: Earn,
          giaodich : GiaoDich,
          launchpool: Launchpool,
      });
      const renderTabBar = (props) => (
          <TabBar
            {...props}
            labelStyle={{ fontSize: 9 ,color:'black',fontWeight:'bold'}}
            style={{ backgroundColor: 'white' }}
            tabStyle={{ width: 'auto',height:40}}
            indicatorStyle={{ 
              height: 2, 
              width: 0
          }}
            inactiveColor="gray"
            scrollEnabled
          />
        );
      return(
        <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={handleIndexChange}
        initialLayout={{ width: layout.width }}
        renderTabBar={renderTabBar}
      />
      );   
  }
const GiaoDich=()=>{
    return(
        <View></View>
    );
}
const Launchpool=()=>{
    return(
        <View></View>
    );
}
export default KhamPha;