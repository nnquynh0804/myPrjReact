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

const firstRoute=()=>(
  <Apps></Apps>
);
const secondRoute=()=>(
  <Panda></Panda>
);
const renderScene = SceneMap({
  first:firstRoute,
  second:secondRoute
});

const Tabviews=()=>{
  const [index,setIndex]=useState(0)
  const [routes]=useState([
    {key:'first',title:'App'},
    {key:'second',title:'Panda'}
  ])
  const layout = useWindowDimensions();
  return(
    <TabView
      navigationState={{index,routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{width:layout.width}}
    >
    </TabView>
  );
}
export default Tabviews;