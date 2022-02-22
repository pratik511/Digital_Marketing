/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, ScrollView, Text, View } from 'react-native';
import { FAB } from 'react-native-paper';
import { Item } from 'react-native-paper/lib/typescript/components/List/List';
import CatagoryImage from '../components/CategoryImage';
import Header from '../components/Header';
import Lable from '../components/Lable';
import Model from '../components/Model';
import colors from '../utils/colors';
import { img } from '../utils/Imgdata';


const Home = (props) => {
  // console.warn('props',img);
  return (
    <View style={{ backgroundColor: colors.black }}>
      <Header title="Home" inamer2="server-outline" {...props} />
      <ScrollView>
        <View>
          {
            img && img.map((item) => {
              return (
                
                <>
                {/* {console.warn("1",item)} */}
                  <Lable title={item.header} view={item.view} onPress={() => props.navigation.navigate('Viewall', { itemdata: item.image ,headername:item })} />
                  <CatagoryImage data={item.image} onPress={() => props.navigation.navigate('Frame', { id: item.image, img: item.image })} />

                </>
              )
            })
          }
          {/* <Text>Home</Text> */}
          {/* <Model /> */}
        </View>
      </ScrollView>
      <FAB style={{ position: 'absolute', margin: 16, marginBottom: 60, right: 0, bottom: 0, backgroundColor: 'green' }} color={'#fff'} onPress={() => { console.warn('whatsapp open'); }} visible={true} size={40} icon="whatsapp" />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
