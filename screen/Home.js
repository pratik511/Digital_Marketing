/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, ScrollView, Text, View, } from 'react-native';
import { FAB } from 'react-native-paper';
import Flatlist from '../components/Flatlist';
import Header from '../components/Header';
import Model from '../components/Model';
import colors from '../utils/colors';
import { img } from '../utils/Imgdata';


const Home = (props) => {

  return (
    <View style={{backgroundColor:colors.black}}>
      <Header title='Home' inamer2='server-outline' />
      <ScrollView>
        <View>
          {/* <Text>Home</Text> */}
          <Model />
          {/* <Flatlist data={img.image} header={img.header} {...props}/> */}
          <Flatlist data={img.image1} header={img.header1} {...props} />
          <Flatlist data={img.image2} header={img.header2} {...props} />
          <Flatlist data={img.image3} header={img.header3} {...props} />
          <Flatlist data={img.image4} header={img.header4} {...props} />
          <Flatlist data={img.image5} header={img.header5} {...props} />
          <Flatlist data={img.image6} header={img.header6} {...props} />
          <Flatlist data={img.image7} header={img.header7} {...props} />
          <Flatlist data={img.image8} header={img.header8} {...props} />
          <Flatlist data={img.image9} header={img.header9} {...props} />
          <Flatlist data={img.image10} header={img.header10} {...props} />
          <Flatlist data={img.image11} header={img.header11} {...props} />
          <Flatlist data={img.image12} header={img.header12} {...props} />
          <Flatlist data={img.image13} header={img.header13} {...props} />
          <Flatlist data={img.image14} header={img.header14} {...props} />
          <Flatlist data={img.image15} header={img.header15} {...props} />
          <Flatlist data={img.image16} header={img.header16} {...props} />
          <Flatlist data={img.image17} header={img.header17} {...props} />
          <Flatlist data={img.image18} header={img.header18} {...props} />
          <Flatlist data={img.image19} header={img.header19} {...props} />
          <Flatlist data={img.image20} header={img.header20} {...props} />
          <Flatlist data={img.image21} header={img.header21} {...props} />
          <Flatlist data={img.image22} header={img.header22} {...props} />
          <Flatlist data={img.image23} header={img.header23} {...props} />
        </View>
      </ScrollView>
      <FAB style={{ position: 'absolute', margin: 16,marginBottom:60, right: 0, bottom: 0,backgroundColor:"green" }} color={'#fff'} onPress={() => { console.warn("whatsapp open");}} visible={true} size={40} icon='whatsapp'  />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
