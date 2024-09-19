import React ,{ useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import styles from './style';
import FetchPrice from './HomeTab1ViewPrice';
import Price24h from './HomeTab1View24h';
const ViewPB = ({name,name1,icon})=>{
    return(
    <View style={styles.viewPhoBien1}>
        <View style={{flexDirection:'row',alignItems:'center'}}>
            <Text style={styles.textPhoBien1}>{name}</Text>
            <FontAwesome6 name={icon} size={15} color='#FF7F50' style={{marginLeft:5,marginTop:3}}></FontAwesome6>
        </View>
        <View style={styles.viewPhoBien2}>
            <View style={{flexDirection:'column',alignItems:'flex-end',width:'50%'}}>
                <FetchPrice name1={name1}></FetchPrice>
            </View>
                <Price24h name1={name1}></Price24h>
        </View>
    </View>
    );
}
export default ViewPB;