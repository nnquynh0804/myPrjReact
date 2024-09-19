import React from 'react';
import { TouchableOpacity, Text,Image, View } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './style';
const BTNImage = ({ label,srcI}) => {
  return (
    <TouchableOpacity activeOpacity={0.5} style={{flexDirection: 'column'}}>
      <View style={{borderRadius:10,borderWidth:1,justifyContent:'center',alignContent:'center',flexDirection:'row',height:33,width:33,borderColor:'#e0e0d1'}}>
        <Image source={srcI} style={styles.buttonA}></Image>
      </View>
      <Text style={{textAlign: 'center'}}>{label}</Text>
    </TouchableOpacity>
  );
};

export default BTNImage;