import React from 'react';
import { TouchableOpacity, Text,Image } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from'react-native-vector-icons/Ionicons';
import styles from './style';
const BTN = ({ TYPEIC, nameIC, label,st,sz,srcI}) => {
  const renderIcon = () => {
    switch(TYPEIC) {
      case 'MaterialCommunityIcons':
        return <MaterialCommunityIcons name={nameIC} size={20} color='black' />;
      case 'FontAwesome6':
        return <FontAwesome6 name={nameIC} size={20} color='black' />;
      case 'Ionicons':
        return <Ionicons name={nameIC} size={20} color='black' />;
      case 'Icon':
          return <Icon name={nameIC} size={20} color='black' />;
      default:
        return <MaterialCommunityIcons name={nameIC} size={20} color='black' />; 
    }
  };

  return (
    <TouchableOpacity style={styles.buttonHelp}>
      {renderIcon()}
    </TouchableOpacity>
  );
};

export default BTN;