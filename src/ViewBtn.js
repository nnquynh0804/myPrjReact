import {
    ActivityIndicator,
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
  } from 'react-native';
  
const ViewBtn = ({
    values,
    selectedValue,
    setSelectedValue,
  }) => (
    <View style={styles.row}>
      {values.map((value) => (
        <TouchableOpacity
          key={value}
          onPress={() => setSelectedValue(value)}
          style={[styles.button, selectedValue === value && styles.selected]}>
          <Text
            style={[
              styles.buttonLabel,
              selectedValue === value && styles.selectedLabel,
            ]}>
            {value}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20
    },
    boxContainer: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    box: {
      width: 50,
      height: 50,
      margin: 5,
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
  });
  export default ViewBtn;