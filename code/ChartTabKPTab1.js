import {View,Text,Button,SafeAreaView,ScrollView, TextInput,TouchableOpacity, Image,useWindowDimensions, ImageBackground} from 'react-native'
import React, { useState} from 'react';
import styles from './style';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6'
import { TabView,SceneMap } from 'react-native-tab-view';
import { TabBar } from 'react-native-tab-view';
import AntDesign from 'react-native-vector-icons/AntDesign';
import CheckBox from '@react-native-community/checkbox';
import { useDispatch,useSelector } from 'react-redux';
import { setTabIndex } from './reduxx/tabSlice3';
import ViewKP from './ChartTabKpTab1View';
import ViewDBV from './ChartTabKpTab2View';
const Earn=()=>{
    return(
        <View style={{flex:1,backgroundColor:'white',}}>
            <Text style={{fontSize:15,fontWeight:'bold',padding:5,color:'black'}}>Khuyến nghị</Text>
            <View style={{flexDirection:'row',width:'100%',justifyContent:'space-between',padding:10}}>
                <ViewKP src={require('../img/Bitcoin.png')} txt1="BTC" txt2="249,89%" txt3="APR tối đa" width='30%'></ViewKP>
                <ViewKP src={require('../img/BNB.png')} txt1="BNB" txt2="182,78%" txt3="APR tối đa" width='30%'></ViewKP>
                <ViewKP src={require('../img/ETH.png')} txt1="ETH" txt2="260,51%" txt3="APR tối đa" width='30%'></ViewKP>
            </View>
            <View style={{width:'100%',padding:10}}>
                <ViewKP src={require('../img/ETH.png')} txt1="ETH Staking 8,07% APR" txt3="Rủi ro thấp • thuận tiện" width='100%'></ViewKP>
            </View>
            <View>
                <TouchableOpacity style={{padding:15}}>
                <Text style={{fontSize:15,textAlign:'center',color:'#cccc00', fontWeight:'bold'}}>Xem thêm</Text>
                </TouchableOpacity>
            </View >
            <View style={{borderTopWidth:1,borderTopColor:'#e0e0d1'}}>
                <View>
                    <Text style={{fontSize:15,fontWeight:'bold',padding:5,marginTop:5,color:'black'}}>Sản phẩm nổi bật</Text>
                </View>
            </View>
            <SPNoiBat></SPNoiBat>
        </View>
    );
}
const SPNoiBat=()=>{
    const layout = useWindowDimensions();
  
    //   const [index, setIndex] = React.useState(0);
    //   const [routes] = React.useState([
    //       { key: 'duocBV', title: 'Được bảo vệ' },
    //       { key: 'loiSuatCao', title: 'Lợi suất cao' },
    //       { key: 'dauTuTuDong', title: 'Đầu tư tự động' },
    //   ]);
    const { index, routes } = useSelector(state => state.tab3);
    const dispatch = useDispatch();

    const onIndexChange = (newIndex) => {
        dispatch(setTabIndex(newIndex));
    };
  
      const renderScene = SceneMap({
        duocBV: DuocBV,
        loiSuatCao : LoiSuatCao,
        dauTuTuDong: DauTuTuDong,
      });
      const renderTabBar = (props) => (
          <TabBar
            {...props}
            labelStyle={{ fontSize:  10,color:'black',fontWeight:'bold'}}
            style={{ backgroundColor: 'white' }}
            tabStyle={{ width: 'auto',height:40}}
            indicatorStyle={{ 
              height: 3, 
              width: 0.2,
              backgroundColor:'orange'
          }}
            inactiveColor="gray"
            scrollEnabled
          />
        );
      return(
        <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={onIndexChange}
        initialLayout={{ width: layout.width }}
        renderTabBar={renderTabBar}
      />
      );   
  }
const DuocBV=()=>{
    return(
        <ScrollView>
        <View style={{flexDirection:'column',justifyContent:'space-around'}}>
            <View style={{flexDirection:'row',justifyContent:'space-between',padding:8}}>
                    <Text style={{fontWeight:500}}>Coin</Text>
                    <Text style={{fontWeight:500}}>APR</Text>
            </View>
            <ViewDBV name="USDC" src={require('../img/USDC.png')} ></ViewDBV>
            <ViewDBV name="USDT" src={require('../img/USDT.png')} ></ViewDBV>
            <ViewDBV name="BNB" src={require('../img/BNB.png')} ></ViewDBV>
            <ViewDBV name="FDUSD" src={require('../img/FDUSD.png')} txt="Tối đa" ></ViewDBV>
            <ViewDBV name="AVA" src={require('../img/AVA.png')} txt="Tối đa"></ViewDBV>
        </View>
        </ScrollView>
    );
}
const LoiSuatCao=()=>{
    return(
        <View></View>
    );
}
const DauTuTuDong=()=>{
    return(
        <View></View>
    );
}
export default Earn;