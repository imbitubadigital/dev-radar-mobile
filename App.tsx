import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar, YellowBox } from 'react-native';
import Routes from './src/Routes';

YellowBox.ignoreWarnings(['Unrecognized WebSocket']);

const App: React.FC = () => (
  <NavigationContainer>
    <StatusBar barStyle="dark-content" backgroundColor="#ff9000" />
    <Routes />
  </NavigationContainer>
);

export default App;
