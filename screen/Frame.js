/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { Image, StyleSheet, Text, View, Dimensions, ScrollView, FlatList, TouchableOpacityBase, TouchableOpacity } from 'react-native';
import Header from '../components/Header';
import colors from '../utils/colors';
import Eflatlist from '../components/Eflatlist';
import Editior from '../components/Editior';
import Share from 'react-native-share';

const { width } = Dimensions.get('window');
const height = width * 0.50;

const Frame = ({ route},props) => {
    const [imageSource, setImageSource] = useState(null);
    const categoryImage = route.params.img;
    // console.warn('itemssssss', categoryImage);
    // console.warn("itemssssss",categoryImage);


    const renderItem = ({ item }) => {
        // console.warn(item);
        return (
            <View>
                <Image source={{ uri: item.img }} style={{ width: width, height: height * 2, backgroundColor: colors.yellow }} />
                {imageSource === null ?
                    null
                    : <Image source={{ uri: imageSource }} style={{ width: 400, height: 300 }} />
                }
            </View>
        );
    };

    const myCustomerShare = async () => {
        const shareOption = {
            message: 'Hello props',
        };
        try {
            const ShareResponse = await Share.open(shareOption);
            console.log(JSON.stringify(ShareResponse));
        }
        catch (error) {
            console.log('Error => ', error);
        }
    };



    return (
        <View style={{ backgroundColor: colors.black, width, height: height * 4 }}>
            <Header inamel="chevron-back-outline" title="Edit Frame" inamer1="arrow-down-outline" inamer2="arrow-redo-outline" preasename2={myCustomerShare} />
            <ScrollView >
                <View style={{ marginBottom: 200 }}>
                    <Eflatlist />
                    <View>
                        {/* <Flatlist data={img.image1} /> */}
                        <View style={{ top: height * 0.15, marginBottom: height * 0.15 }}>
                            {/* <Swiper1 categoryImage1={categoryImage} id={categoryid} categoryimg={categoryimg} /> */}
                            <FlatList data={categoryImage} renderItem={renderItem} horizontal={true} showsHorizontalScrollIndicator={false} />
                        </View>
                        <Editior setImageSource={setImageSource} imageSource={imageSource} />
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

export default Frame;

const styles = StyleSheet.create({});
