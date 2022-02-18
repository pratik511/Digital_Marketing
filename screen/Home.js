/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, ScrollView, Text, View } from 'react-native';
import { FAB } from 'react-native-paper';
import Flatlist from '../components/Flatlist';
import Header from '../components/Header';
import Model from '../components/Model';
import colors from '../utils/colors';
import { img } from '../utils/Imgdata';


const Home = (props) => {
  // console.warn('props',img);
  return (
    <View style={{ backgroundColor: colors.black }}>
      <Header title="Home" inamer2="server-outline" />
      <ScrollView>
        <View>
          {/* <Text>Home</Text> */}
          <Model />
          {
            img.map((item) => {
              console.warn(item);
              return (
                <>
                  <Flatlist data={item.image1} header={item.header1} view={item.view1} {...props} />
                  <Flatlist data={item.image2} header={item.header2} view={item.view2} {...props} />
                  <Flatlist data={item.image3} header={item.header3} view={item.view3} {...props} />
                  <Flatlist data={item.image4} header={item.header4} view={item.view4} {...props} />
                  {/*<Flatlist data={item.image5} header={item.header5} view={item.view1} {...props} />
                  <Flatlist data={item.image6} header={item.header6} view={item.view1} {...props} />
                  <Flatlist data={item.image7} header={item.header7} view={item.view1} {...props} />
                  <Flatlist data={item.image8} header={item.header8} view={item.view1} {...props} />
                  <Flatlist data={item.image9} header={item.header9} view={item.view1} {...props} />
                  <Flatlist data={item.image10} header={item.header10} view={item.view1} {...props} />
                  <Flatlist data={item.image11} header={item.header11} view={item.view1} {...props} />
                  <Flatlist data={item.image12} header={item.header12} view={item.view1} {...props} />
                  <Flatlist data={item.image13} header={item.header13} view={item.view1} {...props} />
                  <Flatlist data={item.image14} header={item.header14} view={item.view1} {...props} />
                  <Flatlist data={item.image15} header={item.header15} view={item.view1} {...props} />
                  <Flatlist data={item.image16} header={item.header16} view={item.view1} {...props} />
                  <Flatlist data={item.image17} header={item.header17} view={item.view1} {...props} />
                  <Flatlist data={item.image18} header={item.header18} view={item.view1} {...props} />
                  <Flatlist data={item.image19} header={item.header19} view={item.view1} {...props} />
                  <Flatlist data={item.image20} header={item.header20} view={item.view1} {...props} />
                  <Flatlist data={item.image21} header={item.header21} view={item.view1} {...props} />
                  <Flatlist data={item.image22} header={item.header22} view={item.view1} {...props} />
                  <Flatlist data={item.image23} header={item.header23} view={item.view1} {...props} /> */}
                </>
              );
            })
          }

        </View>
      </ScrollView>
      <FAB style={{ position: 'absolute', margin: 16, marginBottom: 60, right: 0, bottom: 0, backgroundColor: 'green' }} color={'#fff'} onPress={() => { console.warn('whatsapp open'); }} visible={true} size={40} icon="whatsapp" />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
