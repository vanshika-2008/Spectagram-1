import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigator from './Navigation/tabNavigator';
import DrawerNavigator from './navigation/drawerNavigation';



export default function App() {
  return (
    <NavigationContainer>
   <BottomTabNavigator/>
   </NavigationContainer>
   
  );
}