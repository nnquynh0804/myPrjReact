import { View,Text } from "react-native";
import CheckBox from '@react-native-community/checkbox';
import React, { useState} from 'react';
import styles from "./style";
const VChart=({text})=>{
  const [toggleCheckBox, setToggleCheckBox] = useState(false)
  return(
    <View style={{flexDirection:'row',width:'45%',justifyContent:'space-between',alignItems:'center'}}>
        <View style={{flexDirection:'row',alignItems:'flex-end'}}>
          <Text style={styles.textPhoBien1}>{text}</Text>
          <Text style={{fontSize:12,fontWeight:500}}>/USDT</Text>
        </View>
        <CheckBox
          tintColors={{ true: '#000000', false: '	 #000000' }}
          disabled={false}
          value={toggleCheckBox}
          onValueChange={setToggleCheckBox}
          />
    </View>
  );
}
export default VChart;