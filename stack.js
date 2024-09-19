import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Button,Text, useWindowDimensions, View } from 'react-native';
import Apps from './src/App';
import { List, Title } from 'react-native-paper';
import Red from './src/navigation/RedScrn';
import Panda from './PanDascrn';
import { TabView,SceneMap } from 'react-native-tab-view';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
// import Icon from 'react-native-vector-icons/FontAwesome';

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen name="Test" component={Apps}></Stack.Screen>
        <Stack.Screen name="Red" component={Red}></Stack.Screen>
        <Stack.Screen name ="Panda" component={Panda}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const HomeScreen = ({navigation}) => {
    return (
    <List.Accordion 
        title='CHOOSE' 
        left={props =>
        <List.Icon {...props} icon="folder"/>
        }>
      <Button
        title="Go to App"
        onPress={() =>
          navigation.navigate('Test')
        }
      > </Button>
      <Button
        title='Go To red'
        onPress={()=>
            navigation.navigate('Red')
        }
      ></Button>
     {/* <Icon name="rocket" /> */}
     <Button
      title='Go to Panda'
      onPress={()=>
          navigation.navigate('Panda')
      }
     >

     </Button>

    </List.Accordion>
    );
  };

export default MyStack;