/* eslint-disable prettier/prettier */
import React,{useState} from 'react';
import { StyleSheet, Text, TouchableOpacity, View ,Alert, Image } from 'react-native';
import colors from '../utils/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ImagePicker from 'react-native-image-picker';


const Editior = () => {
    const [imageSource, setImageSource] = useState(null);

    function selectImage() {
      let options = {
        title: 'You can choose one image',
        maxWidth: 256,
        maxHeight: 256,
        noData:true,
        mediaType:'photo',
        storageOptions: {
          skipBackup: true,
        },
      };
      ImagePicker.showImagePicker(options, response => {
        console.log({ response });
        if (response.didCancel) {
          console.log('User cancelled photo picker');
          Alert.alert('You did not select any image');
        } else if (response.error) {
          console.log('ImagePicker Error: ', response.error);
        } else if (response.customButton) {
          console.log('User tapped custom button: ', response.customButton);
        } else {
          let source = { uri: response.uri };
          console.log({ source });
          setImageSource(source.uri);
        }
      });
    }
    return (
        <View style={{ backgroundColor: colors.white }}>
            <View style={{ flex: 1, flexDirection: 'row',  height: 50 }}>
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
                <TouchableOpacity style={[styles.flex, styles.top]}>
                    <Text >
                        <Icon name="format-size" size={32} color={colors.black} />
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.flex, styles.top]} onPress={selectImage}>
                    <Text >
                        <Icon name="add-photo-alternate" size={32} color={colors.black} />
                    </Text>
                </TouchableOpacity>
            </View>
            {  imageSource === null ?
                <Image source={{uri:("https://i.pinimg.com/originals/fa/91/74/fa91748fd7a73ff50cf638d4761df282.jpg")}} style={{width:400,height:300}} />
                :<Image source={{uri:imageSource }} style={{width:400,height:300}} />
            }
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
