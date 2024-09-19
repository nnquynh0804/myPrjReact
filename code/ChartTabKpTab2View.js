import { View,Image,Text,ScrollView} from "react-native";
import App from "./ChartAPR";
const ViewDBV=({name,src,txt})=>{
    return(
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <View style={{flexDirection:'row',alignItems:'center'}}>
                    <Image source={src} style={{height:25,width:25}}></Image>
                    <Text style={{fontWeight:'bold',color:'black',padding:5}}>{name}</Text>
                </View>
                <App name1={name} txt={txt} ></App>
           </View>
    );
}
export default ViewDBV;
