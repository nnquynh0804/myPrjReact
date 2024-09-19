import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './style';
import AntDesign from 'react-native-vector-icons/AntDesign';
const BTNKP = ({ TYPEIC, nameIC, label}) => {
  const renderIcon = () => {
    switch(TYPEIC) {
      case 'MaterialCommunityIcons':
        return <MaterialCommunityIcons name={nameIC} size={20} />;
      case 'FontAwesome6':
        return <FontAwesome6 name={nameIC} size={20} />;
        case 'AntDesign':
        return <AntDesign name={nameIC} size={20}  />;
      case 'Ionicons':
        return <Ionicons name={nameIC} size={20}  />;
      default:
        return <MaterialCommunityIcons name={nameIC} size={20}  />; 
    }
  };

  return (
    <TouchableOpacity activeOpacity={0.5} style={{flexDirection: 'row'}}>
      {renderIcon()} 
      <Text style={{fontSize:12,marginTop:4,marginLeft:3}}>{label}</Text>
    </TouchableOpacity>
  );
};

export default BTNKP;