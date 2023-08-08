import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/home/Home';
import Forecast from '../screens/forecast/forecast';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName={'Home'}
      screenOptions={{ headerShown: false }}>
      <Tab.Screen name={'Home'} component={Home} />
      <Tab.Screen name={'Forecast'} component={Forecast} />
    </Tab.Navigator>
  );
};
const Navigator = () => {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
};

export default Navigator;
