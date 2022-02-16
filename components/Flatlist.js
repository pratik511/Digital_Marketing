/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native';
import { img } from '../utils/Imgdata';

const Flatlist = (props ,{navigation}) => {
    const { data, header } = props;
    // const {id} = route.params.id;
    // const {img} = route.params.img;
    const renderItem = ({ item }) => {
        return (
            <View style={styles.Grig}>
                <TouchableOpacity onPress={() => navigation.navigate('frame',{id:item.id ,img:item.img})}>
                    <Image style={styles.tinyLogo} source={{ uri: item.img }} />
                </TouchableOpacity>
            </View>
        );
    };
    return (
        <View>
            <View style={{ flex: 1, backgroundColor: "black", height: 150 }}>
                <View style={{ flex: 1, display: 'flex', flexDirection: 'row', margin: 6, marginLeft: 10 }}>
                    <Text style={{ flex: 1, color: '#fff', fontWeight: "bold" }}>{header}</Text>
                    <TouchableOpacity>
                        <Text style={{ color: '#c4bfbe', fontWeight: "100", fontSize: 12 }}>{img.view}</Text>
                    </TouchableOpacity>
                </View>
                <FlatList data={data} renderItem={renderItem} horizontal showsHorizontalScrollIndicator={false} style={{ height: 100, marginLeft: 12, marginRight: 12 }} />
            </View>
        </View>
    );
};

export default Flatlist;

const styles = StyleSheet.create({
    Grig: {
        borderWidth: 0.5,
        flex: 1,
        alignItems: "center",
        margin: 5,
        bottom: 5,
        // marginBottom: 10,
        // borderRadius: 5,
    },
    tinyLogo: {
        borderRadius: 5,
        width: 112,
        height: 111,
    },

});
