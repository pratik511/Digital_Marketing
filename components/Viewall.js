/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, Text, View, FlatList, Image, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import colors from '../utils/colors';
import Header from './Header';
const height1 = Dimensions.get('window').height;
const { width } = Dimensions.get('window');
const height = width * 0.50;


const Viewall = ({ route }) => {
    // console.warn("Viewallroute",route);


    const viewAllData = route.params.itemdata;
    const renderItem = ({ item }) => {
        return (
            <View style={{ flex: 1 }}>
                <View style={styles.Grig}>
                    <TouchableOpacity onPress={() => { }}>
                        <Image
                            style={styles.tinyLogo}
                            source={{
                                uri: item.img,
                            }}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        );
    };
    return (
        <View style={{ backgroundColor: colors.black, height: height1 }}>
            <ScrollView>
                <Header title={route.params.headername.header} inamel='chevron-back-outline' />
                <View style={{ marginLeft: width * 0.07, marginRight: width * 0.05, top: 20, marginBottom: 50 }}>
                    <FlatList data={viewAllData} renderItem={renderItem} numColumns={2} />
                </View>
            </ScrollView>
        </View>
    );
};

export default Viewall;

const styles = StyleSheet.create({
    Grig: {
        flex: 1,
        margin: 2,
        marginBottom: 12,
        // alignItems: 'center',
    },
    tinyLogo: {
        width: width * 0.40,
        height: height * 0.80,
        borderRadius: 10,
    },

});
