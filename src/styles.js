import {
    ActivityIndicator,
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
  } from 'react-native';
const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      flexDirection:'column'
    },
    boxContainer: {
      width: '50%',
      height: '40%',
      marginTop:20,
      justifyContent: 'center',
      alignItems: 'center',
    },
    box: {
      width: 50,
      height: 50,
      margin: 2,
    },
    column: {
      flexDirection: 'column',
    },
    row: {
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    columnReverse: {
      flexDirection: 'column-reverse',
    },
    rowReverse: {
      flexDirection: 'row-reverse',
    },
    buttonContainer: {
      flexDirection: 'row',
      marginTop: 20,
    },
    button: {
      paddingHorizontal: 8,
      paddingVertical: 6,
      borderRadius: 4,
      backgroundColor: 'oldlace',
      alignSelf: 'flex-start',
      marginHorizontal: '1%',
      marginBottom: 6,
      minWidth: '48%',
      textAlign: 'center',
    },
    selected: {
      backgroundColor: 'darkblue',
    },
    buttonLabel: {
      color: 'black',
    },
    selectedLabel: {
      color: 'white',
      fontWeight: 'bold',
    },
    layoutflex:{
        height:'50%',
        width:'100%',
        //marginTop:200,
        flexDirection:'row'    
    },
    img:{
        height:'50%',
        width:'50%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    Text:{
        height:'40%',
        width:'50%',
        flexWrap:'wrap'
    },
    red:{
        backgroundColor:'red',
        color:'red',
        width:'100%',
        height:'100%'
    },
    Panda:{
      height:'90%',
      width:'100%'
    },
    Icon:{
      width:25,
      height:25,
      marginTop:15,
      marginBottom:10,
      justifyContent:'center',
      alignContent:'center'
    }
  });
  export default styles;