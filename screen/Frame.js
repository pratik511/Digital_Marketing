/* eslint-disable prettier/prettier */
import React from 'react';
import { Image, StyleSheet, Text, View, Dimensions, ScrollView } from 'react-native';
import Flatlist from '../components/Flatlist';
import Header from '../components/Header';
import colors from '../utils/colors';
import { img } from '../utils/Imgdata';

const { width } = Dimensions.get('window');
const height = width * 0.50;

const Frame = ({ route }) => {
    const img1 = route.params.img;
    return (
        <View style={{ backgroundColor: colors.black ,width,height:height*4 }}>
            <Header inamel='chevron-back-outline' title='Edit Frame' inamer1="arrow-down-outline" inamer2='arrow-redo-outline' />
            <ScrollView>
                <View>
                    <Flatlist data={img.image1} />
                    <View style={{ top: height * 0.15, marginBottom: height * 0.15 }}>
                        <Image style={{ width, height: height * 2 }} source={{ uri: img1 }} />
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

export default Frame;

const styles = StyleSheet.create({});
