import {View,Text,Button,SafeAreaView,ScrollView, TextInput,TouchableOpacity, Image,useWindowDimensions, ImageBackground} from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import React, { useState} from 'react';
import styles from './style';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6'
import { TabView,SceneMap } from 'react-native-tab-view';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { TabBar } from 'react-native-tab-view';
import { useDispatch,useSelector } from 'react-redux';
import { setTabIndex } from './reduxx/tabSlice4';
import BTNKP from './HomeTab2Button';
import AVA from './HomeTab2Ava';
const TabKhamPha=()=>{
    const layout = useWindowDimensions();

    const { index, routes } = useSelector(state => state.tab4);
    const dispatch = useDispatch();

    const handleIndexChange = (newIndex) => {
        dispatch(setTabIndex(newIndex));
    };
    const renderScene = SceneMap({
      khampha: KhamPha,
      dangtheodoi: DangTheoDoi,
      thongbao: ThongBao,
      tintuc: TinTuc,
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
            width: 0.2, 
        }}
        inactiveColor="gray"
        scrollEnabled
      />
    );
    return (
        <View style={{ flex: 1 }}>
          <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={handleIndexChange}
            initialLayout={{ width: layout.width }}
            renderTabBar={renderTabBar}
          />
        </View>
    );
}
const KhamPha=()=>{
    return(
        <ScrollView style={{backgroundColor:'white'}}>
            <CapNhatTT></CapNhatTT>
            <ViewBL1></ViewBL1>
            <ViewBL2></ViewBL2>
        </ScrollView>
    );    
}
const ViewBL1=()=>{
    return(
        <View style={{borderWidth:1,borderColor:'rgba(0,0,0,0.02)'}}>
            <AVA name="Richard Teng" src={require('../img/richard-teng.jpg')} time="21 giờ"></AVA>
            <View>
                <Text style={{fontSize:17,marginLeft:11,color:'black'}}>Giá điện tử và giá cổ phiếu giảm mạnh gần đây bị ảnh hưởng 
                    bởi nhiều yếu tố kinh tế vĩ mô.Chúng tôi KHÔNG tin rằng đó là
                    dấu hiệu quả một xu hướng tiêu cực dài hạn.
                </Text>
                <Text style={{fontSize:17,marginLeft:11,color:'black'}}>
                    Với khả năng Fed cắt giảm lãi xuất và biến động địa chính...
                </Text>
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-between',marginLeft:10,marginRight:10}}>
                <BTNKP TYPEIC="FontAwesome6" nameIC="chart-simple" label="863.7K"></BTNKP>
                <BTNKP nameIC="comment-text" label="103"></BTNKP>
                <BTNKP TYPEIC="AntDesign" nameIC="like1" label="457"></BTNKP>
                <BTNKP TYPEIC="FontAwesome6" nameIC="retweet" label="8"></BTNKP>
                <BTNKP nameIC="share" label="69"></BTNKP>
            </View>
        </View>  
        );
}
const ViewBL2=()=>{
    return(
        <View style={{borderWidth:1,borderColor:'rgba(0,0,0,0.02)'}}>
            <AVA name="MrHai-TGPMedia" src={require('../img/dog.jpg')} time="4 th 8"></AVA>
            <View>
                <Text style={{fontSize:17,marginLeft:11,color:'black'}}>Thú thật gần 40 tuổi mình mới biết được
                    điều này.Và nếu bạn đang ở 25-30 tuổi thì cần làm ngay vì bạn đang có 2 lợi 
                    thế mà nhiều người không có được :
                </Text>
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-between',marginLeft:10,marginRight:10}}>
            <BTNKP TYPEIC="FontAwesome6" nameIC="chart-simple" label="863.7K"></BTNKP>
                <BTNKP nameIC="comment-text" label="103"></BTNKP>
                <BTNKP TYPEIC="AntDesign" nameIC="like1" label="457"></BTNKP>
                <BTNKP TYPEIC="FontAwesome6" nameIC="retweet" label="8"></BTNKP>
                <BTNKP nameIC="share" label="69"></BTNKP>
            </View>
        </View>  
        );
}
const CapNhatTT=()=>{
    const [isVisible,SetIsVisible] = useState(false);
    const toggleVisibility = () => {
        SetIsVisible(!isVisible);
      };
    return(
        <View>
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <Text style={{fontSize:18,fontWeight:'bold',color:'black'}}>Cập nhật tin tức mới nhất</Text>
                <TouchableOpacity onPress={toggleVisibility} style={{justifyContent:'center',marginEnd:20}}>
                    <FontAwesome6 name={isVisible?'chevron-down':'chevron-right'} size={10}></FontAwesome6>
                </TouchableOpacity>
            </View>
            {isVisible &&
                    (<View style={{flexDirection:'row',marginTop:5}}>
                        <View style={{flexDirection:'row',marginTop:7,width:'5%'}}>
                            <FontAwesome6 name='circle-dot' size={10}></FontAwesome6>
                        </View>
                        <View style={{flexDirection:'row',width:'70%'}}>
                            <Text style={{fontSize:14,marginLeft:5,color:'black'}}>Cá voi Bitcoin tăng lượng nắm giữ trong bối cảnh thị trường suy thoái</Text>
                        </View>
                        <View style={{flexDirection:'row',width:'25%',justifyContent:'flex-end',paddingEnd:5}}>
                            <Text style={{fontSize:12,marginLeft:5}}>23 phút</Text>
                        </View>          
                    </View>)}
        </View>
    );
}
const DangTheoDoi=()=>{
    return(
        <View></View>
    );    
}
const ThongBao=()=>{
    return(
        <View></View>
    );    
}
const TinTuc=()=>{
    return(
        <View></View>
    );    
}
export default TabKhamPha;