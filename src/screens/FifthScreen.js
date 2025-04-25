import {Image, View} from 'react-native';
import CustomBtn from '../component/CustomBtn';
import React from 'react';

const FifthScreen = ({ navigation }) => {
  return (
    <View style={{flex: 1, backgroundColor: '#000', alignItems: 'center', justifyContent: 'center'}}>

      <>
        <View style={{
          backgroundColor: '#1F1F1F',
          width: '100%',
          position: 'absolute',
          height: 160,
          borderRadius: 990 / 2,
          top: -80,
          transform: [{ scaleY: 0.4 }],
        }}/>
        <Image source={require('../assets/img/Group48097023.png')} style={{width: 80, position: 'absolute', top: 0}} resizeMode={'contain'} />
      </>

      <CustomBtn onPress={() => {navigation.navigate('GameProcces')}} title='Start now' stylesAdd={{marginBottom: 24, width: '90%'}}/>
      <CustomBtn onPress={() => {navigation.navigate('Improvements')}} title='Improvements' stylesAdd={{marginBottom: 24, width: '90%'}}/>

    </View>
  )
}

export default FifthScreen
