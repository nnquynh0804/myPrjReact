import {View,Text,Button,SafeAreaView,ScrollView, TextInput,TouchableOpacity, Image,useWindowDimensions, ImageBackground} from 'react-native'
import Icon from'react-native-vector-icons/Ionicons'
import React, { useState} from 'react';
const TongSoDuSCRN=()=>{
    const [isVisible,SetIsVisible] = useState(false);
    const toggleVisibility = () => {
        SetIsVisible(!isVisible);
      };
    return(
        <View style={{flexDirection:'column',padding:5}}>
            <View style={{flexDirection:'row'}}>
                <Text style={{fontSize:15,color:'black'
                }}>Tổng số dư (USD)</Text>
                <TouchableOpacity onPress={toggleVisibility}>
                    <Icon name={isVisible?'chevron-up':'chevron-down'} size={20} color='black'></Icon>
                </TouchableOpacity>
            </View>
            {isVisible &&
                (<View style={{flexDirection:'row',justifyContent:'space-between',width:'100%',padding:5}}>
                    <Text style={{fontWeight:'bold',fontSize:20,marginLeft:15}}>................USD</Text>
                    <TouchableOpacity style={{
                                        height:30,
                                        width:100,
                                        borderRadius:6,
                                        backgroundColor:'yellow',
                                        justifyContent:'center',
                                        marginEnd:20,}}>
                        <Text style={{textAlign:'center',alignSelf:'center',fontWeight:'bold',fontSize:15,color:'black'}}>Nạp tiền</Text>
                    </TouchableOpacity>
                </View>)
            }
        </View>
    );
}
export default TongSoDuSCRN;