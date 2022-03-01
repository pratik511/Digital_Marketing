/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-return-assign */
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { useState, useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView, StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../utils/colors';
import Lable from '../utils/Lable';
import Home from './Home';
import Greeting from './Greeting';
import Download from './Download';
import Business from './Business';
import seting from './seting';
import Slider from '@react-native-community/slider';
import { SelectCountry } from 'react-native-element-dropdown';
import DragTextEditor from 'react-native-drag-text-editor';
import Account from './Account';
const WINDOW = Dimensions.get('window');

const TEXT = "Sample";

const local_data = [
  {
    value: '1',
    lable: 'Country 1',
  },
  {
    value: '2',
    lable: 'Country 2',
  },
  {
    value: '3',
    lable: 'Country 3',
  },
  {
    value: '4',
    lable: 'Country 4',
  },
  {
    value: '5',
    lable: 'Country 5',
  },
];

function SettingsScreen() {
  const [sliderValue, setSliderValue] = useState(15);
  const [country, setCountry] = useState('1');


  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: sliderValue * 0.6 }}>Settings!</Text>
      <SafeAreaView>

        <Text style={{ color: 'black' }}>
          Value of slider is : {sliderValue}
        </Text>
        <Slider
          style={{ width: 200, height: 40 }}
          minimumValue={0}
          maximumValue={100}
          minimumTrackTintColor="#FFFFFF"
          maximumTrackTintColor="#000000"
          value={sliderValue}
          onValueChange={
            (sliderValue) => setSliderValue(sliderValue)
          }
        />
      </SafeAreaView>
      <SelectCountry
        style={{
          margin: 16,
          height: 30,
          width: 200,
          borderBottomColor: 'gray',
          backgroundColor: '#fff',
          borderBottomWidth: 0.5,
        }}
        selectedTextStyle={{
          fontSize: 16,
          marginLeft: 8,
        }}
        placeholderStyle={{ fontSize: 16 }}
        imageStyle={{
          width: 24,
          height: 24,
        }}
        iconStyle={{
          width: 24,
          height: 24,
        }}
        maxHeight={200}
        value={country}
        data={local_data}
        valueField="value"
        labelField="lable"
        imageField="image"
        placeholder="Select country"
        onChange={e => {
          setCountry(e.value);
        }}
      />
    </View>
  );
}

const Stack = createNativeStackNavigator();


function HomeStackScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

const Tab = createBottomTabNavigator();
const TabScreen = () => {
  return (
    <Tab.Navigator initialRouteName="Home"
      //     screenOptions={{
      //     tabBarStyle: { height: 65 },
      // }}
      screenOptions={({ route }) => ({
        tabBarLabel: ({ focused, color }) => {
          let label;
          switch (route.name) {
            case 'Home':
              return label = focused ? <Text style={{ color, fontSize: 15, marginBottom: 8, marginTop: 5 }}>{Lable.Home}</Text> : <Text style={{ color, fontSize: 13, marginBottom: 8, marginTop: 5 }}>{Lable.Home}</Text>;
            case 'Greetings':
              return label = focused ? <Text style={{ color, fontSize: 15, marginBottom: 8, marginTop: 5 }}>{Lable.Greetings}</Text> : <Text style={{ color, fontSize: 13, marginBottom: 8, marginTop: 5 }}>{Lable.Greetings}</Text>;
            case 'Downlods':
              return label = focused ? <Text style={{ color, fontSize: 15, marginBottom: 8, marginTop: 5 }}>{Lable.Downlodes}</Text> : <Text style={{ color, fontSize: 13, marginBottom: 8, marginTop: 5 }}>{Lable.Downlodes}</Text>;
            case 'Business':
              return label = focused ? <Text style={{ color, fontSize: 15, marginBottom: 8, marginTop: 5 }}>{Lable.Business}</Text> : <Text style={{ color, fontSize: 13, marginBottom: 8, marginTop: 5 }}>{Lable.Business}</Text>;
            case 'Account':
              return label = focused ? <Text style={{ color, fontSize: 15, marginBottom: 8, marginTop: 5 }}>{Lable.Account}</Text> : <Text style={{ color, fontSize: 13, marginBottom: 8, marginTop: 5 }}>{Lable.Account}</Text>;
          }
          return label;
        },
        tabBarStyle: { height: 65 },
      })}

      tabBarOptions={{
        activeBackgroundColor: colors.black,
        inactiveBackgroundColor: colors.black,
        activeTintColor: colors.yellow,
        inactiveTintColor: colors.white,
        iconStyle: { top: 5 },
      }}
    >
      <Tab.Screen name="Home" component={HomeStackScreen} options={{ headerShown: false, tabBarIcon: (({ color, focused }) => focused ? <Icon name="home-outline" size={23} style={{ color: color }} /> : <Icon name="home-outline" size={20} style={{ color: color }} />) }} />
      <Tab.Screen name="Greetings" component={Greeting} options={{ headerShown: false, tabBarIcon: (({ color, focused }) => focused ? <Icon name="layers-outline" size={23} style={{ color: color }} /> : <Icon name="layers-outline" size={20} style={{ color: color }} />) }} />
      <Tab.Screen name="Downlods" component={Download} options={{ headerShown: false, tabBarIcon: (({ color, focused }) => focused ? <Icon name="download-outline" size={23} style={{ color: color }} /> : <Icon name="download-outline" size={20} style={{ color: color }} />) }} />
      <Tab.Screen name="Business" component={Business} options={{ headerShown: false, tabBarIcon: (({ color, focused }) => focused ? <Icon name="briefcase-outline" size={23} style={{ color: color }} /> : <Icon name="briefcase-outline" size={20} style={{ color: color }} />) }} />
      <Tab.Screen name="Account" component={Account} options={{headerShown: false, tabBarIcon: (({ color, focused }) => focused ? <Icon name="person-outline" size={23} style={{ color: color }} /> : <Icon name="person-outline" size={20} style={{ color: color }} />) }} />
    </Tab.Navigator>
  );
};

export default TabScreen;

const styles = StyleSheet.create({});
