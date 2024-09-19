import {View,Text,Button,SafeAreaView,ScrollView, TextInput,TouchableOpacity, Image,useWindowDimensions, ImageBackground} from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from'react-native-vector-icons/Ionicons'
import React, { useState} from 'react';
import styles from './style';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6'
import TongSoDuSCRN from './HomeTongSoDu';
import TabDS from './HomeTab1';
import TabKhamPha from './HomeTab2';
import BTN from './HomeButton';
import BTNImage from './HomeButtonImage';
const MainLayout=()=>{
    const [text, setText] = useState('');
    return(
        <SafeAreaView style={{flex:1,backgroundColor:'white'}}>
            <View>
                <View style={{
                        width:'100%',
                        height:66,
                        alignItems:'center',
                        justifyContent:'space-evenly',
                        flexDirection:'row',
                        alignContent:'center'
                    }}>
                        <Image
                            source={require('../img/Binance_Logo.png')}
                            style={{height:30,width:30}}
                        ></Image>
                        <View style={styles.input}> 
                            <View style={{marginLeft:5}}>
                                <Icon name='search' size={20}></Icon>
                            </View>
                            <TextInput
                                placeholder="Nhập vào đây"
                                value={text}
                                onChangeText={setText}
                            />
                        </View>
                        <View style={{
                            width:'30%',
                            flexDirection:'row',
                            justifyContent:'space-between',
                            
                        }}>
                            <BTN nameIC="line-scan"></BTN>
                            <BTN TYPEIC="FontAwesome6" nameIC="headset"></BTN>
                            <BTN TYPEIC="Icon" nameIC="notifications"></BTN>
                            <BTN nameIC="hand-coin"></BTN>
                        </View>
                    </View>
            </View>
            <ScrollView
            style={{
                width:'100%',
                flexDirection:'column'
            }}>
                <View>
                    <TongSoDuSCRN></TongSoDuSCRN>
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-around',padding:10}}>
                    <BTNImage srcI={require('../img/download.jpg')} label="Nạp"  ></BTNImage>
                    <BTNImage srcI={require('../img/earn.jpg')} label="Earn" ></BTNImage>
                    <BTNImage srcI={require('../img/P2P.jpg')} label="P2P" ></BTNImage>
                    <BTNImage srcI={require('../img/more.jpg')} label="Thêm" ></BTNImage>
                </View>
                <ScrollView>
                    <TabDS></TabDS>
                    <TabKhamPha></TabKhamPha>
                </ScrollView>
            </ScrollView>
        </SafeAreaView>
    );
}
export default MainLayout;