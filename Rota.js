import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import StackRoutes from "./stackRoutes";
import Config from "../Pages/Config";


import Feather from 'react-native-vector-icons/Feather'
import Material from 'react-native-vector-icons/MaterialIcons'
import Octicons from 'react-native-vector-icons/Octicons'
import Font from 'react-native-vector-icons/FontAwesome'
import M from 'react-native-vector-icons/MaterialCommunityIcons'

const Tab = createBottomTabNavigator();


export default function Rota(){
  return(
      <Tab.Navigator
      screenOptions={{
        headerShow: true,
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: 'black',

        tabBarStyle:{
          borderTopWidth: 0
        }
      }}>

        <Tab.Screen
         name="HomeStack"
        component={StackRoutes}
        options={{
         

          headerShown: false,
          tabBarLabel: 'Git Search',
          tabBarLabelStyle:{
            fontSize: 16,
            fontFamily: 'NanumGothic-ExtraBold',

           },
           tabBarStyle:{
            height: 55,
            position: 'absolute',
            bottom: 0,
            // marginRight:20,
            // marginLeft:20,
              // borderTopLeftRadius: 10,
              // borderTopRightRadius: 10,
            backgroundColor: 'white',
            borderTopWidth: 0,
          },
        

          tabBarIcon: ({ color, size }) =>{
            return <M name="text-box-search-outline" color={color} size={size}></M>
          },
       
        }}></Tab.Screen>

        <Tab.Screen name="Config"
         component={Config}
         options={{
          headerShown: false,
          tabBarLabel: 'Contact',
          tabBarLabelStyle:{
            fontSize: 16,
            fontFamily: 'NanumGothic-ExtraBold',

           },
           tabBarStyle:{
            height: 55,
            position: 'absolute',
            bottom: 0,
            // marginRight:20,
            // marginLeft:20,
              // borderTopLeftRadius: 10,
              // borderTopRightRadius: 10,
            backgroundColor: 'white',
            borderTopWidth: 0,
          },
          tabBarIcon: ({ color, size }) =>{
            return <Octicons name="info" color={color} size={size}></Octicons>
          }
         }}></Tab.Screen>



      </Tab.Navigator>
  )
}