import { Image,View,TouchableOpacity,Text } from "react-native";
import styles from "./style";
const AVA=({src,time,name})=>{
    return(
    <View style={{flexDirection:'row',marginTop:10}}>
        <View style={{flexDirection:'row',width:'30%'}}>
            <Image 
                source={src}
                style={{width:40,height:40,marginLeft:15}}
            ></Image>
            <View style={{marginLeft:10}} >
                <Text style={{fontSize:14,fontWeight:'bold',color:'black'}}>{name}</Text>
                <Text>{time}</Text>
            </View>
        </View >
        <View style={{flexDirection:'row',width:'70%',justifyContent:'flex-end'}}>
            <TouchableOpacity style={styles.buttonB}>
                    <Text style={{fontWeight:'bold',textAlign:'center',color:'black'}}>Theo dõi</Text>
            </TouchableOpacity>
        </View >
    </View>);
}

export default AVA;
