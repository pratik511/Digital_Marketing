/* eslint-disable prettier/prettier */
import React from 'react';
import {Button, StyleSheet, Text, TextInput, View, Dimensions, Image, TouchableOpacity  } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const mobile = require('../utils/img/otp.png');

const Verify = ({navigation}) => {
    return (
        <View style={{ paddingTop: 80, paddingLeft: 20, paddingRight: 20, backgroundColor: '#fff', width, height, alignItems: 'center', justifyContent: 'center' }}>
            <View style={{}}>
                <Image source={mobile} style={{ width: 200, height: 160 }} />
            </View>
            <Text style={{ fontSize: 25, fontWeight: '700', marginTop: height / 15, color: '#4e6dcc' }}>Verification Code</Text>
            <Text style={{ fontSize: 15, fontWeight: '100', marginTop: 5 }}>Please enter code sent  {"\n"}        to <Text style={{color:"#06a10e" ,fontWeight:'600'}}>1234567890</Text></Text>
            <View style={{ flex: 1, flexDirection: 'row', marginTop: height / 15 }}>
                <TextInput keyboardType='number-pad' maxLength={1} style={{ flex: 0.1, fontSize: 15, borderWidth: 1,alignSelf: 'center',paddingTop: 10, height: 40, paddingLeft: 15, marginRight: 8 }} />
                <TextInput keyboardType='number-pad' maxLength={1} style={{ flex: 0.1, fontSize: 15, borderWidth: 1,alignSelf: 'center', marginLeft: 8, paddingTop: 10, height: 40, paddingLeft: 15, marginRight: 8 }} />
                <TextInput keyboardType='number-pad' maxLength={1} style={{ flex: 0.1, fontSize: 15, borderWidth: 1,alignSelf: 'center', marginLeft: 8, paddingTop: 10, height: 40, paddingLeft: 15, marginRight: 8 }} />
                <TextInput keyboardType='number-pad' maxLength={1} style={{ flex: 0.1, fontSize: 15, borderWidth: 1,alignSelf: 'center', marginLeft: 8, paddingTop: 10, height: 40, paddingLeft: 15,  }} />
            </View>
            <View style={{ marginBottom: height / 3, width: width / 1.24, marginTop: height / 12 }}>
                <Button title='Verify' style={{ borderRadius: 10 }} color={'#06a10e'} onPress={() => navigation.navigate('tabscreen')} />
            <TouchableOpacity style={{alignItems:'center' ,marginTop:20}}>
                <Text style={{color:'#06a10e' ,fontWeight:'700'}}>Resend Code</Text>
            </TouchableOpacity>
            </View>
        </View>
    );
};

export default Verify;

const styles = StyleSheet.create({});
