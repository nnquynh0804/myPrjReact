/**
 * @format
 */
import MyStack from './stack';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import Tabviews from './Tabview';
import TabBottom from './BottomTab';
import buttomTabView from './code/Main';
import Main from './src/Main';
import App from './src/db';
// import App from './code/API'
import FetchPairs from './code/ChartAPR';
AppRegistry.registerComponent(appName, () => buttomTabView);
