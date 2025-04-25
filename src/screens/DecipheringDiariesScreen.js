import {View, Text, Image} from 'react-native';
import CustomBtn from '../component/CustomBtn';
import React from "react";

const DecipheringDiariesScreen = ({ navigation }) => {
  return (
    <View style={{backgroundColor: '#000', flex: 1, alignItems: 'center', justifyContent: 'flex-start'}}>
        <>
            <View style={{
                backgroundColor: '#1F1F1F',
                width: '100%',
                height: 160,
                position: 'absolute',
                borderRadius: 990 / 2,
                top: -80,
                transform: [{ scaleY: 0.4 }],
            }}/>
            <Image source={require('../assets/img/Group48097023.png')} style={{width: 80, position: 'absolute', top: 0}} resizeMode={'contain'} />
        </>

      <Text style={{color: '#fff', fontSize: 16, fontWeight: 'bold', textAlign: 'center', marginBottom: 100, marginTop: 200}}>
        Read fragments of great scientists writings and guess the author.
      </Text>

      <CustomBtn title='Begin' onPress={() => navigation.navigate('BeginDecipheringDiaries')} />
    </View>
  )
}

export default DecipheringDiariesScreen
