/* eslint-disable prettier/prettier */
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../utils/colors';
import Lable from '../utils/Lable';
import Frame from './Frame';
import Home from './Home';

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <Stack.Navigator>
     <Stack.Screen name="Home" component={Home} options={{headerRight:((color) => <Icon name="server-outline" size={23} style={{ color: color,right:15 }} />) }} />
     <Stack.Screen name="Frame" component={Frame} options={{title:'Edit Frame' ,tabBarVisible: false}} />
    </Stack.Navigator>
   );
 }

const Tab = createBottomTabNavigator();
const TabScreen = () => {
  return (
    <Tab.Navigator initialRouteName='Home'
      //     screenOptions={{
      //     tabBarStyle: { height: 65 },
      // }}
      screenOptions={({ route }) => ({
        tabBarLabel: ({ focused, color }) => {
          let label;
          switch (route.name) {
            case 'Home':
              return label = focused ? <Text style={{ color, fontSize: 15, marginBottom: 8, marginTop: 5 }}>{Lable.Home}</Text> : <Text style={{ color, fontSize: 13, marginBottom: 8, marginTop: 5 }}>{Lable.Home}</Text>
            case 'Greetings':
              return label = focused ? <Text style={{ color, fontSize: 15, marginBottom: 8, marginTop: 5 }}>{Lable.Greetings}</Text> : <Text style={{ color, fontSize: 13, marginBottom: 8, marginTop: 5 }}>{Lable.Greetings}</Text>
            case 'Downlodes':
              return label = focused ? <Text style={{ color, fontSize: 15, marginBottom: 8, marginTop: 5 }}>{Lable.Downlodes}</Text> : <Text style={{ color, fontSize: 13, marginBottom: 8, marginTop: 5 }}>{Lable.Downlodes}</Text>
            case 'Business':
              return label = focused ? <Text style={{ color, fontSize: 15, marginBottom: 8, marginTop: 5 }}>{Lable.Business}</Text> : <Text style={{ color, fontSize: 13, marginBottom: 8, marginTop: 5 }}>{Lable.Business}</Text>
            case 'Account':
              return label = focused ? <Text style={{ color, fontSize: 15, marginBottom: 8, marginTop: 5 }}>{Lable.Account}</Text> : <Text style={{ color, fontSize: 13, marginBottom: 8, marginTop: 5 }}>{Lable.Account}</Text>
          }
          return label;
        },
        tabBarStyle: { height: 65 },
      })}

      tabBarOptions={{
        activeBackgroundColor: colors.black,
        inactiveBackgroundColor: colors.black,
        activeTintColor:colors.yellow,
        inactiveTintColor:colors.white,
        iconStyle: { top: 5 },
      }}
    >
      <Tab.Screen name='Home' component={HomeStackScreen}  options={{ headerShown: false, tabBarIcon: (({ color, focused }) => focused ? <Icon name="home-outline" size={23} style={{ color: color }} /> : <Icon name="home-outline" size={20} style={{ color: color }} />)  }} />
      <Tab.Screen name='Greetings' component={HomeScreen} options={{ tabBarIcon: (({ color, focused }) => focused ? <Icon name="layers-outline" size={23} style={{ color: color }} /> : <Icon name="layers-outline" size={20} style={{ color: color }} />) }} />
      <Tab.Screen name='Downlodes' component={SettingsScreen} options={{ tabBarIcon: (({ color, focused }) => focused ? <Icon name="download-outline" size={23} style={{ color: color }} /> : <Icon name="download-outline" size={20} style={{ color: color }} />) }} />
      <Tab.Screen name='Business' component={SettingsScreen} options={{ tabBarIcon: (({ color, focused }) => focused ? <Icon name="briefcase-outline" size={23} style={{ color: color }} /> : <Icon name="briefcase-outline" size={20} style={{ color: color }} />) }} />
      <Tab.Screen name='Account' component={SettingsScreen} options={{ tabBarIcon: (({ color, focused }) => focused ? <Icon name="person-outline" size={23} style={{ color: color }} /> : <Icon name="person-outline" size={20} style={{ color: color }} />) }} />
    </Tab.Navigator>
  );
};

export default TabScreen;

const styles = StyleSheet.create({});
