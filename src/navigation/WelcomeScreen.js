import React from 'react';
import {View, Text, Button, TouchableOpacity, Image} from 'react-native';
import CustomBtn from '../component/CustomBtn';

const WelcomeScreen = ({ navigation }) => (
  <View style={{ flex: 1, backgroundColor: '#000',  padding: 16,paddingVertical: 50, justifyContent: 'space-around' }}>
    <View style={{alignItems: 'center'}}>
      <Text style={{fontSize: 32, color: '#fff', fontFamily: 'Staatliches-Regular', marginBottom: -100}}>
        welcome to the
      </Text>
      <Image source={require('../assets/img/Grou.png')} style={{width: '90%'}} resizeMode='contain'/>
    </View>
    <View style={{marginBottom: 0, marginTop: 0}}>
      <Text style={{fontSize: 16, color: '#fff', alignSelf:'center'}}>
        Discover fragments of writings from great scientists. Read them and try to guess who might have been the author of these thoughts. Find inspiration? Save your favorite quotes in your archive!
      </Text>
      <CustomBtn title='Continue' onPress={() => navigation.replace('Main')} stylesAdd={{alignSelf:'center', marginTop: 50}}/>
    </View>
  </View>
);

export default WelcomeScreen;
