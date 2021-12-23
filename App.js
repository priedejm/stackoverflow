import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Home from './screens/Home'
import ListHome from './screens/ListHome'
import MapHome from './screens/MapHome'
import Profile from './screens/profile';
import Friends from './screens/Friends'
import VenueDetailsScreen from './screens/VenueDetails';
import FavoriteBar from './screens/FavoriteBar';


const Tab = createBottomTabNavigator();

/*
* Welcome to the source code of your Ultimate Night Time Guide. Still no name for our company :)
* This is our first professional attempt at a IOS and android application.
* I do not know what else to say tbh
*/

function MyTabs() {
  return (

    <Stack.Navigator
     initialRouteName="Home">        

    <Stack.Screen name="Home" component= {Home} options={{headerShown: false}}/>
    <Stack.Screen name="Profile" component= {Profile} options={{headerShown: false}}/>
    <Stack.Screen name="Friends" component= {Friends} options={{headerShown: false}}/>
    <Stack.Screen name="VenueDetails" component= {VenueDetailsScreen} options={{headerShown: false}}/> 
    <Stack.Screen name="FavoriteBar" component= {FavoriteBar} options={{headerShown: false}}/>


      
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
      component={MyTabs}
      options={{
        tabBarLabel: 'Home',
        headerShown: false,
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="home" color={color} size={size} />
        ),
      }}
    />
     <Tab.Screen
      name="Friends"
      component={Friends}
      options={{
        tabBarLabel: 'Friends',
        headerShown: false,
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="account-group" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="Profile"
      component={Profile}
      options={{
        tabBarLabel: 'Profile',
        headerShown: false,
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="account" color={color} size={size} />
        ),
      }}
    />
    
  </Tab.Navigator>
</NavigationContainer>
);
}



const Stack = createStackNavigator();