/* eslint-disable prettier/prettier */
import React from 'react';
import { Image, StyleSheet, Text, View, Dimensions, ScrollView } from 'react-native';
import Flatlist from '../components/Flatlist';
import { img } from '../utils/Imgdata';
import Header from '../components/Header';
import colors from '../utils/colors';
import ImagesSwiper from 'react-native-image-swiper';
import Swiper1 from '../components/Swiper1';
import Viewall from '../components/Viewall';

const { width } = Dimensions.get('window');
const height = width * 0.50;

const Frame = ({ route }) => {
    const img1 = route.params.img;
    const categoryImage = route.params.item;
    const categoryid = route.params.id;
    const categoryimg = route.params.img;
    // console.warn("itemssssss",categoryimg);
    // console.warn("itemssssss",categoryImage);
    return (
        <View style={{ backgroundColor: colors.black, width, height: height * 4 }}>
            <Header inamel='chevron-back-outline' title='Edit Frame' inamer1="arrow-down-outline" inamer2='arrow-redo-outline' />
            <ScrollView>
                <View>
                    {/* <Flatlist data={img.image1} /> */}
                    <View style={{ top: height * 0.15, marginBottom: height * 0.15 }}>
                        <Swiper1 categoryImage1={categoryImage} id={categoryid} categoryimg={categoryimg} />
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

export default Frame;

const styles = StyleSheet.create({});
