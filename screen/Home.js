/* eslint-disable prettier/prettier */
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

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

const Tab = createBottomTabNavigator();
const Home = () => {
  return (
      <Tab.Navigator initialRouteName='Home'
        screenOptions={{
        tabBarStyle: { height: 65 },
        // tabBarLabel=({focused} => { })
    }}

       tabBarOptions = {{ activeBackgroundColor: 'black',
                                      inactiveBackgroundColor:"black",
                                      activeTintColor: '#dbbc3d',
                                      inactiveTintColor: '#fff',
                                      iconStyle:{top:5},
                                      labelStyle: {
                                        fontSize: 11,
                                        marginTop:5,
                                        marginBottom:15,
                                      },
                     }}>
        <Tab.Screen name='Home' component={HomeScreen} options={{tabBarIcon:(({color,focused}) => focused ? <Icon name="home-outline" size={22} style={{color:color}}/ > : <Icon name="home-outline" size={20} style={{color:color}}/>)}}/>
        <Tab.Screen name='Greetings' component={SettingsScreen} options={{tabBarIcon:(({color,focused}) => focused ? <Icon name="layers-outline" size={22}  style={{color:color}}/> :<Icon name="layers-outline" size={20}  style={{color:color}}/>)}}/>
        <Tab.Screen name='Downlodes' component={SettingsScreen}  options={{tabBarIcon:(({color,focused}) => focused ? <Icon name="download-outline" size={22}  style={{color:color}}/> :<Icon name="download-outline" size={20}  style={{color:color}}/>)}}/>
        <Tab.Screen name='Business' component={SettingsScreen} options={{tabBarIcon:(({color,focused}) => focused ? <Icon name="briefcase-outline" size={22}  style={{color:color}}/> :<Icon name="briefcase-outline" size={20}  style={{color:color}}/>)}}/>
        <Tab.Screen name='Account' component={SettingsScreen} options={{tabBarIcon:(({color,focused}) => focused ? <Icon name="person-outline" size={22}  style={{color:color}}/> :<Icon name="person-outline" size={20}  style={{color:color}}/>)}}/>
      </Tab.Navigator>
    );
};

export default Home;

const styles = StyleSheet.create({});
