/* eslint-disable prettier/prettier */
import React from 'react';
import { Image, StyleSheet, Text, View, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const height = width * 0.50;

const Frame = ({ route }) => {
    // const id = route.params.id;
    const img = route.params.img;
    // console.warn(img);
    return (
        <View>
            {/* <Text>{id}</Text> */}
            <View style={{top:height*0.75}}>
                <Image style={{ width: width, height: height * 2 }} source={{ uri: img }} />
            </View>
        </View>
    );
};

export default Frame;

const styles = StyleSheet.create({});
