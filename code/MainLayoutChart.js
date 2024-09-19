import {View,Text,Button,SafeAreaView,ScrollView, TextInput,TouchableOpacity, Image,useWindowDimensions, ImageBackground} from 'react-native'
import React, { useState} from 'react';
import styles from './style';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6'
import { TabView,SceneMap } from 'react-native-tab-view';
import { TabBar } from 'react-native-tab-view';
import CheckBox from '@react-native-community/checkbox';
import VChart from './ChartTabDSView';
import DSyeuThichTT from './ChartTabDS';
import ThiTruong from './ChartTabTT';
import { useDispatch,useSelector } from 'react-redux';
import { setTabIndex } from './reduxx/tabSlice5';
import KhamPha from './ChartTabKP';
const TabTT1=()=>{
    const layout = useWindowDimensions();

    const { index, routes } = useSelector(state => state.tab5);
    const dispatch = useDispatch();

    const handleIndexChange = (newIndex) => {
        dispatch(setTabIndex(newIndex));
    };

    const renderScene = SceneMap({
        dsyeuthich: DSyeuThichTT,
        thitruong: ThiTruong,
        khampha: KhamPha,
        square: Square,
    });
    const renderTabBar = (props) => (
        <TabBar
          {...props}
          labelStyle={{ fontSize: 12 ,color:'black',fontWeight:'bold'}}
          style={{ backgroundColor: 'white' }}
          tabStyle={{ width: 'auto' }}
          indicatorStyle={{ 
            backgroundColor: 'orange',
            height: 3, 
            width: 0.2
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
const Square=()=>{
  return(
      <View></View>
  );    
}
export default TabTT1;