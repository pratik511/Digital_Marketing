/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';
import ImagesSwiper from 'react-native-image-swiper';
import colors from '../utils/colors';
// import { img } from '../utils/Imgdata';
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import Viewall from './Viewall';

const { width } = Dimensions.get('window');
const height = width * 0.50;

const Swiper1 = (props) => {
    const { categoryImage1, id, categoryimg } = props;
    // console.warn("itemssssss",categoryImage1);
    // console.warn("itemssssss",categoryImage1);
    // console.warn("itemssssssidddd", id);
    // console.warn("itemssssssimggggg", categoryimg);

    return (
        <View style={{ flex: 1 }}>
            <Text style={{ color: colors.white }}>Hello</Text>
            <View style={{ backgroundColor: colors.white, width: width }}>
                <Image style={{ width: width, height: height * 2 }} source={{ uri: categoryimg }} />
                {/* <SwiperFlatList 
                    data={categoryImage1}
                    renderItem={({item}) => (
                        <View>
                            <Image style={{width:width ,height:height*2}} source={{ uri: item.img }} />
                        </View>
                    )}
                /> */}
                {/* {
                    categoryImage1.map((item, index) => {
                        // console.warn(item)
                        return (
                            
                            )
                        })
                    } */}
            </View>
            <Viewall />
        </View>
    );
};

export default Swiper1;

const styles = StyleSheet.create({});
