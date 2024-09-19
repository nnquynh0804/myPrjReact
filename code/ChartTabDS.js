import {View,Text,Button,SafeAreaView,ScrollView, TextInput,TouchableOpacity, Image,useWindowDimensions, ImageBackground} from 'react-native'
import React, { useState} from 'react';
import styles from './style';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6'
import { TabView,SceneMap } from 'react-native-tab-view';
import { TabBar } from 'react-native-tab-view';
import CheckBox from '@react-native-community/checkbox';
import VChart from './ChartTabDSView';
const DSyeuThichTT=()=>{
    return(
      <View>
        <View style={{padding:20}}>
          <View style={{flexDirection:'row',justifyContent:'space-between',padding:10}}>
            <VChart text="BNB"></VChart>
            <VChart text="BTC"></VChart>  
          </View>
          <View style={{flexDirection:'row',justifyContent:'space-between',padding:10}}>
            <VChart text="ETH"></VChart>
            <VChart text="USDC"></VChart>
          </View>
          <View style={{flexDirection:'row',justifyContent:'space-between',padding:10}}>
            <VChart text="SOL"></VChart>
            <VChart text="FDUSD"></VChart>
          </View>
          <View style={{flexDirection:'row',justifyContent:'space-between',padding:10}}>
          <VChart text="PEPE"></VChart>
          <VChart text="XRP"></VChart>
          </View>
        </View>
        <View style={{flexDirection:'column',alignItems:'center'}}>
          <TouchableOpacity style={{width:'90%',backgroundColor:'#e6e600',padding:10 ,borderRadius:10}}>
            <Text style={{fontSize:15,fontWeight:'bold',textAlign:'center',color:'black'}}>Thêm vào Danh sách yêu thích</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{padding:20}}>
            <Text style={{fontSize:14,textAlign:'center',color:'#cccc00'}}>Thêm các cặp khác</Text>
          </TouchableOpacity>
        </View>
      </View>
    );    
  }

  export default DSyeuThichTT