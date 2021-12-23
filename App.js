import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Home from './screens/Home'


const Tab = createBottomTabNavigator();

function MyTabs() {
  return (

    <Stack.Navigator
     initialRouteName="Home">        

    <Stack.Screen name="Home" component= {Home} options={{headerShown: false}}/>


      
    </Stack.Navigator>

);
}


export default function App() {

  return (
   <NavigationContainer>
    <Tab.Navigator
    initialRouteName="Home"
    screenOptions={{
      tabBarActiveTintColor: '#F60081',
      tabBarInactiveTintColor: '#4d4d4d',
      tabBarStyle: {
        backgroundColor: '#d1cfcf',
        borderTopColor: 'transparent',
        
      },
      
    }}
  >
    <Tab.Screen
      name="Home"
      component={Home}
      options={{
        tabBarLabel: 'Home',
        headerShown: false,
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="home" color={color} size={size} />
        ),
      }}
    />
  </Tab.Navigator>
</NavigationContainer>
);
}



const Stack = createStackNavigator();