/* eslint-disable prettier/prettier */
import React from 'react';
import { Text,  View } from 'react-native';


const Lable = (props) => {
  const {txt} = props;
  return (
    <View>
    <Text>{txt}</Text>
   </View>
  );
};

export default Lable;
