import {View,Text,Button,SafeAreaView,ScrollView, TextInput,TouchableOpacity, Image,useWindowDimensions, ImageBackground} from 'react-native'
import React, { useState} from 'react';
import styles from './style';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6'
import { TabView,SceneMap } from 'react-native-tab-view';
import { TabBar } from 'react-native-tab-view';
import AntDesign from 'react-native-vector-icons/AntDesign';
import CheckBox from '@react-native-community/checkbox';
import VChart from './ChartTabDSView';
import { useDispatch,useSelector } from 'react-redux';
import { setTabIndex } from './reduxx/tabSlice6';
import ViewPB from './HomeTab1View';
const ThiTruong=()=>{
    const layout = useWindowDimensions();
  
    const { index, routes } = useSelector(state => state.tab6);
    const dispatch = useDispatch();

    const handleIndexChange = (newIndex) => {
        dispatch(setTabIndex(newIndex));
    };
      // const [routes] = React.useState([
      //     { key: 'tsan', title: 'Tài sản' },
      //     { key: 'giaongay', title: 'Giao ngay' },
      //     { key: 'USDM', title: 'USDⓈ-M' },
      //     { key: 'COIN', title: 'COIN-M' },
      //     { key: 'quyenchon', title: 'Quyền chọn' },
      // ]);
  
      const renderScene = SceneMap({
          tsan: TaiSan,
          giaongay: GiaoNgay,
          USDM: USDM,
          COIN: COIN,
          quyenchon:QuyenChon
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
  const TaiSan=()=>{
    return(
        <View style={{flexDirection:'column', backgroundColor:'white',flex:1}}>
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <View style={{flexDirection:'row',marginLeft:5,padding:5}}>
                    <Text>Tên</Text>
                    <View style={{flexDirection:'column',justifyContent:'center',marginLeft:3}}>
                        <AntDesign name="caretup" size={7}></AntDesign>
                        <AntDesign name="caretdown" size={7}></AntDesign>
                    </View>
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-around',width:'60%'}}>
                    <View style={{flexDirection:'row',marginLeft:5,padding:5}}>
                        <Text>Giá gần nhất</Text>
                        <View style={{flexDirection:'column',justifyContent:'center',marginLeft:3}}>
                            <AntDesign name="caretup" size={7}></AntDesign>
                            <AntDesign name="caretdown" size={7}></AntDesign>
                        </View>
                    </View>
                    <View style={{flexDirection:'row',padding:5}}>
                        <Text>Thay đổi 24h</Text>
                        <View style={{flexDirection:'column',justifyContent:'center',marginLeft:5}}>
                            <AntDesign name="caretup" size={7}></AntDesign>
                            <AntDesign name="caretdown" size={7}></AntDesign>
                        </View>
                    </View>
                </View>
            </View>
            <ViewPB name="FLOKI" name1="FLOKIUSDT" change={10.85}></ViewPB>
        </View>
    );    
  }
  const GiaoNgay=()=>{
    return(
        <View></View>
    );    
  }
  const USDM=()=>{
    return(
        <View></View>
    );    
  }
  const QuyenChon=()=>{
    return(
        <View></View>
    );    
  }
  const COIN=()=>{
    return(
        <View></View>
    );    
  } 
export default ThiTruong;