import React from 'react';
import {View, Text, Button, TouchableOpacity, Image} from 'react-native';
import CustomBtn from '../component/CustomBtn';

const WelcomeScreen = ({ navigation }) => (
  <View style={{ flex: 1, backgroundColor: '#000',  padding: 16, justifyContent: 'space-around', alignItems: 'center' }}>
    {/*<View style={{alignItems: 'center'}}>*/}
      <Image source={require('../assets/img/Grou.png')} style={{width: '90%', height: '50%'}} resizeMode='contain'/>
    {/*</View>*/}
    {/*<View style={{}}>*/}
      <Text style={{fontSize: 16, color: '#fff', alignSelf:'center'}}>
        Discover fragments of writings from great scientists. Read them and try to guess who might have been the author of these thoughts. Find inspiration? Save your favorite quotes in your archive!
      </Text>
      <CustomBtn title='Continue' onPress={() => navigation.replace('Main')} stylesAdd={{alignSelf:'center'}}/>
    {/*</View>*/}
  </View>
);

export default WelcomeScreen;
