import {View,Text,Button,SafeAreaView,ScrollView, TextInput,TouchableOpacity, Image,useWindowDimensions, ImageBackground} from 'react-native'
import React, { useState} from 'react';
import styles from './style';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6'
import { TabView,SceneMap } from 'react-native-tab-view';
import { TabBar } from 'react-native-tab-view';
import { useDispatch, useSelector } from 'react-redux';
import { setTab1Index } from '../code/reduxx/tabSlice2';
import ViewPB from './HomeTab1View';

const TabDS=()=>{
    const layout = useWindowDimensions();
    const { index, routes } = useSelector(state => state.tab1);
    const dispatch = useDispatch();

    const handleIndexChange = (newIndex) => {
        dispatch(setTab1Index(newIndex));
    };
    // const [index, setIndex] = React.useState(0);
    // const [routes] = React.useState([
    //     { key: 'dsyeuthich', title: 'Danh sách yêu thích' },
    //     { key: 'phobien', title: 'Phổ biến' },
    //     { key: 'tanggia', title: 'Tăng giá' },
    //     { key: 'giamgia', title: 'Giảm giá' },
    // ]);

    const renderScene = SceneMap({
        dsyeuthich: DSyeuThich,
        phobien: Phobien,
        tanggia: Tanggia,
        giamgia: Giamgia,
    });

  const renderTabBar = (props) => (
    <TabBar
      {...props}
      indicatorStyle={{ 
        backgroundColor: 'orange',
        height: 3,
        width:0.2,
    }}
      labelStyle={{ fontSize: 12 ,color:'black',fontWeight:'bold'}}
      style={{ backgroundColor: 'white' }}
      tabStyle={{ width:'auto'}}
      inactiveColor="gray"
      scrollEnabled
    />
  );

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={handleIndexChange}
      initialLayout={{ width: layout.width }}
      renderTabBar={renderTabBar}
    />
  );

}
const DSyeuThich=()=>{
    return(
        <View></View>
    );    
}
const Phobien=()=>{
    const [isVisible,SetIsVisible] = useState(false);
    const toggleVisibility = () => {
        SetIsVisible(!isVisible);
      };
    return(
        <View style={{backgroundColor:'white'}}>
            <View style={{flexDirection:'row',width:'100%',justifyContent:'space-between',padding:5}}>
                    <Text>Tên</Text>
                <View style={{flexDirection:'row',justifyContent:'space-around',width:'70%'}}>
                    <View style={{flexDirection:'column',alignItems:'flex-end',width:'50%'}}>
                        <Text>Giá gần nhất</Text>
                    </View>
                    <View>
                        <Text style={{marginEnd:20}}>Thay đổi 24h</Text>
                    </View>
                </View>
            </View>
            <ViewPB name= "BNB"  name1 ="BNBUSDT" change={6.61} icon="fire-flame-simple"></ViewPB>
            <ViewPB name= "BTC" name1 ="BTCUSDT" change={3.40} icon="fire-flame-simple"></ViewPB>
            <ViewPB name= "ETH" name1 ="ETHUSDT" change={-4.93} icon="fire-flame-simple"></ViewPB>
            <ViewPB name= "PEPE" name1 ="PEPEUSDT" change={16.62} ></ViewPB>
            <ViewPB name= "SOL" name1 ="SOLUSDT" change={12.67} ></ViewPB>
            <ViewPB name= "BOME" name1 ="BOMEUSDT" change={10.87} ></ViewPB>
            <View>
                <TouchableOpacity onPress={toggleVisibility}>
                    {isVisible &&
                    (<View style={{flexDirection:'row'}}>
                        <Text>OK</Text>
                    </View>)}
                    <Text style={{textAlign:'center',color:'orange'}}>{isVisible?'Rút gọn':'Xem thêm'}</Text>
                </TouchableOpacity>
            </View>
        </View>
    );    
}
const Tanggia=()=>{
    return(
        <View></View>
    );    
}
const Giamgia=()=>{
    return(
        <View></View>
    );    
}
export default TabDS;