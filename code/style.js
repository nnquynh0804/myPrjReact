import { StyleSheet } from "react-native";

const styles=StyleSheet.create({
    input:{
        height:40,
        width:'50%',
        borderRadius:10,
        backgroundColor:'#d6d6c2',
        borderBlockColor:'gray',
        flexDirection:'row',
        alignItems:'center',
    },
    buttonHelp:{
        alignSelf:'center',
        justifyContent:'space-between',
        textAlign:'center',
        color:'black'
    },
    buttonA:{
        height:30,
        width:30,
        textAlign:'center',
        alignItems:'center',
        borderRadius:10,
        color:'black'
    },
    menu:{
        marginTop: 10,
    },
    buttonB:{
        height:20,
        width:65,
        textAlign:'center',
        alignSelf:'center',
        borderRadius:4,
        backgroundColor:'yellow',
        marginEnd:20
    },
    buttonC:{
        height:20,
        width:80,
        textAlign:'center',
        borderRadius:6,
        backgroundColor:'#00e673',
        marginEnd:20,
    },
    viewPhoBien1:{
        flexDirection:'row',
        width:'100%',
        height:40,
        justifyContent:'space-between'
    },
    viewPhoBien2:{
        flexDirection:'row',
        justifyContent:'space-around',
        width:'70%',
        alignItems:'center'
    },
    textPhoBien1:{
        fontWeight:'bold',
        fontSize:15,
        color:'black',
        marginLeft:5,
    },
})

export default styles;