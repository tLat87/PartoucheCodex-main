import {View, Text, Image} from 'react-native';
import CustomBtn from '../component/CustomBtn';
import React from 'react';

const ForthScreen = ({ navigation }) => {
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

      <Text style={{color: '#fff', fontSize: 18, textAlign: 'center', fontWeight: 'bold', paddingHorizontal: 24}}>
        Explore significant discoveries that influenced human history.
      </Text>

      <Image source={require('../assets/img/map.png')} style={{width:'100%'}} resizeMode='contain'/>

      <CustomBtn title='Begin' onPress={() => {navigation.navigate('WorldChangingStart')}} stylesAdd={{width: '90%'}} />
    </View>
  )
}

export default ForthScreen
