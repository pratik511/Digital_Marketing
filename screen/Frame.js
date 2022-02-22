/* eslint-disable prettier/prettier */
import React from 'react';
import { Image, StyleSheet, Text, View, Dimensions, ScrollView, FlatList } from 'react-native';
import Header from '../components/Header';
import colors from '../utils/colors';
import Editior from '../components/Editior';
import Eflatlist from '../components/Eflatlist';


const { width } = Dimensions.get('window');
const height = width * 0.50;

const Frame = ({ route }) => {
    const categoryImage = route.params.img;
    // console.warn('itemssssss', categoryImage);
    // console.warn("itemssssss",categoryImage);

    const renderItem = ({ item }) => {
        // console.warn(item);
        return (
            <View>
                <Image source={{ uri: item.img }} style={{ width: width, height: height * 2, backgroundColor: colors.yellow }} />
            </View>
        );
    };
    return (
        <View style={{ backgroundColor: colors.black, width, height: height * 4 }}>
            <Header inamel="chevron-back-outline" title="Edit Frame" inamer1="arrow-down-outline" inamer2="arrow-redo-outline" />
            <ScrollView>
                <Eflatlist />
                <View>
                    {/* <Flatlist data={img.image1} /> */}
                    <View style={{ top: height * 0.15, marginBottom: height * 0.15 }}>
                        {/* <Swiper1 categoryImage1={categoryImage} id={categoryid} categoryimg={categoryimg} /> */}
                        <FlatList data={categoryImage} renderItem={renderItem} horizontal={true} showsHorizontalScrollIndicator={false} />
                    </View>
                    <Editior />
                </View>
            </ScrollView>
        </View>
    );
};

export default Frame;

const styles = StyleSheet.create({});
