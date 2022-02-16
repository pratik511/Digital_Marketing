/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, ScrollView, Text, View, TouchableOpacity } from 'react-native';
import Flatlist from '../components/Flatlist';
import Model from '../components/Model';
import { img } from '../utils/Imgdata';
// const data = [{
//   id :1 ,
//   imgurl :""
// }, {

// }]

const Home = () => {
//   const renderItem = ({ item }) => {
//     return (
//         <TouchableOpacity style={styles.Grig} onPress= {()=> navigation.navigate('sss', {
//           params : {
//             id : 
//           }
//         })}>
//             <Image style={styles.tinyLogo} source={{ uri:item.img}} />
//         </TouchableOpacity>
//     );
// };
  return (
    <ScrollView>
      <View>
        {/* <Text>Home</Text> */}
        <Model />
        {/* <Flatlist data={img.image} header={img.header} /> */}
        <Flatlist data={img.image1} header={img.header1} />
        <Flatlist data={img.image2} header={img.header2} />
        <Flatlist data={img.image3} header={img.header3} />
        <Flatlist data={img.image4} header={img.header4} />
        <Flatlist data={img.image5} header={img.header5} />
        <Flatlist data={img.image6} header={img.header6} />
        <Flatlist data={img.image7} header={img.header7} />
        <Flatlist data={img.image8} header={img.header8} />
        <Flatlist data={img.image9} header={img.header9} />
        <Flatlist data={img.image10} header={img.header10} />
        <Flatlist data={img.image11} header={img.header11} />
        <Flatlist data={img.image12} header={img.header12} />
        <Flatlist data={img.image13} header={img.header13} />
        <Flatlist data={img.image14} header={img.header14} />
        <Flatlist data={img.image15} header={img.header15} />
        <Flatlist data={img.image16} header={img.header16} />
        <Flatlist data={img.image17} header={img.header17} />
        <Flatlist data={img.image18} header={img.header18} />
        <Flatlist data={img.image19} header={img.header19} />
        <Flatlist data={img.image20} header={img.header20} />
        <Flatlist data={img.image21} header={img.header21} />
        <Flatlist data={img.image22} header={img.header22} />
        <Flatlist data={img.image23} header={img.header23} />
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({});
