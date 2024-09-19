import {View,Text,Button,SafeAreaView,ScrollView, TextInput,TouchableOpacity, Image,useWindowDimensions, ImageBackground} from 'react-native'
import React, { useState} from 'react';
import styles from './style';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6'
import { TabView,SceneMap } from 'react-native-tab-view';
import { TabBar } from 'react-native-tab-view';
const ViewKP=({src,txt1,txt2,txt3,width})=>{
    return(
        <View style={{flexDirection:'row',justifyContent:'space-between',width:{width},borderRadius:10,borderWidth:1,borderColor:'#e0e0d1'}}>
            <View style={{padding:10}}>
                <Text style={{fontWeight:'bold'}}>{txt1}</Text>
                <Text style={{fontWeight:'bold',color:'#00e68a'}}>{txt2}</Text>
                <Text>{txt3}</Text>
            </View>
            <View style={{padding:3}}>
                <Image source={src} style={{height:25,width:25}}></Image>
            </View>
        </View>
    );
}
export default ViewKP;