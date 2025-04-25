import {View, Text, Image, TouchableOpacity} from 'react-native';
import CustomBtn from '../component/CustomBtn';
import React from 'react';
import FullStar from '../assets/svg/FullStar';

const ThirdScreen = ({ navigation }) => {
  return (
    <View style={{flex: 1, backgroundColor: '#000', alignItems: 'center', justifyContent: 'center'}}>
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

      <View style={{paddingHorizontal: 24}}>
        <Text style={{color: '#fff', fontSize: 16, fontWeight: 'bold', textAlign: 'center', marginBottom: 100, marginTop: -100}}>
          Lesser-known stories, strange experiments, and forgotten geniuses
        </Text>

        <View style={{flexDirection: 'row',alignItems:'center', justifyContent: 'space-between', width:'100%', marginBottom: 24}}>
          <Text style={{color: '#fff', marginRight: 20, fontSize: 24, fontWeight: 'bold',}}>
            Deciphering Diaries
          </Text>
          <CustomBtn title='Open' onPress={() => {navigation.navigate('DecipheringDiaries')}} stylesAdd={{width: 100}}/>
        </View>

        <View style={{flexDirection: 'row',alignItems:'center', justifyContent: 'space-between', width:'100%'}}>
          <Text style={{color: '#fff', marginRight: 20, fontSize: 24, fontWeight: 'bold',}}>
            Liked quotes
          </Text>
          <TouchableOpacity onPress={()=>{navigation.navigate('LikedQuote')}} style={{borderWidth: 3, borderColor: '#BC3D32', padding: 16, borderRadius: 10, width: 100, alignItems: 'center'}}>
            <FullStar/>
          </TouchableOpacity>
        </View>
      </View>

    </View>
  )
}

export default ThirdScreen
