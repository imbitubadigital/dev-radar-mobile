import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Main from '../pages/Main';
import Profile from '../pages/Profile';

const App = createStackNavigator();

const AppRoutes: React.FC = () => (
  <App.Navigator>
    <App.Screen
      name="Main"
      component={Main}
      options={{
        title: 'Dev Radar',
        headerTintColor: '#333',
        headerStyle: {
          backgroundColor: '#ff9000',
        },
      }}
    />
    <App.Screen
      name="Profile"
      component={Profile}
      options={{
        title: 'Perfil',
        headerTintColor: '#333',
        headerStyle: {
          backgroundColor: '#ff9000',
        },
      }}
    />
  </App.Navigator>
);

export default AppRoutes;
