/* eslint-disable prettier/prettier */
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './screen/Login';
import Verify from './screen/Verify';
import Splash from './Splash';
import TabScreen from './screen/TabScreen';
import Frame from './screen/Frame';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Splash' component={Splash} options={{headerShown:false}} />
        <Stack.Screen name='login' component={Login} options={{headerShown:false}}/>
        <Stack.Screen name='verify' component={Verify} options={{headerShown:false}}/>
        <Stack.Screen name='home' component={TabScreen} options={{headerShown:false}}/>
        <Stack.Screen name='frame' component={Frame} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
