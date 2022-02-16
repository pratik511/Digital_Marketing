/* eslint-disable prettier/prettier */
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const Frame = ({navigation ,route}) => {
    const {id} = route.params.id;
    const {img} = route.params.img;
    return (
    <View>
        <Text>{id}</Text>
        {/* <Image source={{uri:img}} /> */}
      <Text>Frame</Text>
    </View>
  );
};

export default Frame;

const styles = StyleSheet.create({});
