/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { Dimensions, StyleSheet, Text, TouchableOpacity, View, Alert, Image, Modal } from 'react-native';
import colors from '../utils/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ImagePicker from 'react-native-image-crop-picker';
// import Slider from '@react-native-community/slider';

const { width } = Dimensions.get('window');
const height = width * 0.50;

const Editior = (props) => {
    const { imageSource, setImageSource } = props;
    const [model, setModel] = useState(false);


    function selectImage() {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true,
            cropperCircleOverlay: true,
            freeStyleCropEnabled: true,
            avoidEmptySpaceAroundImage: true,
            includeBase64: true,
            mediaType: 'photo',
            compressImageQuality: 0.5,
        }).then(image => {
            // console.log(image);
            // console.warn(image.path);
            setImageSource(image.path);
        });
        setModel(false);
    }
    function selectCamera() {
        ImagePicker.openCamera({
            cropping: true,
            width: 500,
            height: 500,
            cropperCircleOverlay: true,
            compressImageMaxWidth: 640,
            compressImageMaxHeight: 480,
            freeStyleCropEnabled: true,
            includeBase64: true
        }).then(image => {
            // console.log(image);
            // console.warn(image.path);
            setImageSource(image.path);
        });
        setModel(false);
    }
    return (
        <View>
            
            <Modal transparent={true} visible={model}>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <View style={{ backgroundColor: '#fff', padding: 15, width: width * 0.80, height: height * 0.9, borderRadius: 4, justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: 17, color: colors.black }}>Select File from</Text>
                        <TouchableOpacity onPress={selectImage} style={{ backgroundColor: colors.white, justifyContent: 'center', }}>
                            <Text style={{ fontSize: 15, padding: 4 }}>Choose Image</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={selectCamera} style={{ backgroundColor: colors.white, justifyContent: 'center', }}>
                            <Text style={{ fontSize: 15, padding: 4 }}>Capture Image</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setModel(!model)} style={{ backgroundColor: colors.white, justifyContent: 'center' }}>
                            <Text style={{ fontSize: 15, padding: 4 }}>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>

            <View style={{ backgroundColor: colors.white }}>
                <View style={{ flex: 1, flexDirection: 'row', height: 50 }}>
                    <TouchableOpacity style={[styles.flex, styles.top]}>
                        <Text>
                            <Icon name="title" size={32} color={colors.black} />
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.flex, styles.top]}>
                        <Text >
                            <Icon name="opacity" size={32} color={colors.black} />
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.flex, styles.top]}>
                        <Text >
                            <Icon name="format-italic" size={32} color={colors.black} />
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.flex, styles.top]} onPress={() => { }}>
                        <Text >
                            <Icon name="format-size" size={32} color={colors.black} />
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.flex, styles.top]} onPress={() => setModel(true)}>
                        <Text >
                            <Icon name="add-photo-alternate" size={32} color={colors.black} />
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
            
        </View>
    );
};

export default Editior;

const styles = StyleSheet.create({
    flex: {
        flex: 1,
        alignItems: 'center',
    },
    top: {
        top: 10,
    },
});
