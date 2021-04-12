import React, { Component } from 'react';
import { Text, View,Image,Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Distance from './Distance';
import Currency from './Currency';
import Number from './Number';
import Time from './Time';
import Temperature from './Temperature';



const Tab = createBottomTabNavigator();


export default class App extends Component {
 render(){
  
  return (
    <NavigationContainer >
      <Tab.Navigator  
       screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
         // let tabIcon = "../images/length.png";
          if (route.name === "Length") {
            tabIcon = require("./images/length.png");
          } else if (route.name === "Currency") {
            tabIcon = require("./images/currency.png");
          } else if (route.name === "Time") {
            tabIcon = require("./images/time.png");
          } else if (route.name === "Number") {
            tabIcon = require("./images/number.png");
          }else if (route.name === "Temperature") {
            tabIcon = require("./images/temperature.png");
          }

          return (
            <Image
              source={tabIcon}
              resizeMode="contain"
              style={{
                height: 26.4,
                width: 22,
                //tintColor: focused ? tabActiveColor : tabInActiveColor,
              }}
            />
          );
        },
      })}

       tabBarOptions={{
        activeTintColor: '#FFFFFF',
        inactiveTintColor: '#A3E4D7',
        
        style: {
          backgroundColor: '#1A5276',
          width: Dimensions.get('window').width
        },
        labelStyle: {
          textAlign: 'center',
          fontSize:20,
          marginBottom:10
        },
        indicatorStyle: {
          borderBottomColor: '#87B56A',
          borderBottomWidth: 2,
          
        },
      }}>
        <Tab.Screen name="Currency" component={Currency}  options={{ tabBarLabel: "Currency",}}/>
        <Tab.Screen name="Length" component={Distance}  options={{ tabBarLabel: "Length",}}/>
        <Tab.Screen name="Time" component={Time}  options={{ tabBarLabel: "Time",}} />
        <Tab.Screen name="Number" component={Number}   options={{ tabBarLabel: "Number",}}/>
        <Tab.Screen name="Temperature" component={Temperature}   options={{ tabBarLabel: "Temperature",}}/>
      </Tab.Navigator>
    </NavigationContainer>
 );
}
}