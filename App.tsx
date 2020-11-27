import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import Main from "./screens/Main";
import AnotherPage from "./screens/AnotherPage"
const Drawer = createDrawerNavigator();
export default function App() {
  return (
    <>
    <NavigationContainer>
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Main" component={Main} />
      <Drawer.Screen name="AnotherPage" component={AnotherPage} />
    </Drawer.Navigator>
  </NavigationContainer>
  <StatusBar hidden={true}/>
  </>
  );
}

