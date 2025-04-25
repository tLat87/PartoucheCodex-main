import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import CustomBtn from '../component/CustomBtn';
import EmptyStar from '../assets/svg/EmptyStar';
import React from 'react';

const AboutSingleDecipheringDiariesScreen = ({ navigation, route }) => {
    const {full, name} = route.params;
  return (
    <ScrollView style={{backgroundColor: '#000', flex: 1,}}>
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
            <Image source={require('../assets/img/Group48097023.png')} style={{width: 80, position: 'absolute', top: 0, alignSelf: 'center'}} resizeMode={'contain'} />
        </>
        <View style={{alignItems: 'center', marginTop: 50}}>
            <Text style={{fontSize: 20, color: 'white', fontWeight: 'bold', marginBottom: 8}}>
                {name}
            </Text>
            {/*<Image source={require('../assets/img/1/Rectangle26.png')} style={{marginBottom: 40}} />*/}

            <Text style={{fontSize: 16, color: 'white', marginBottom: 8, paddingHorizontal: 24, alignSelf: 'flex-start'}}>
                {full}
            </Text>
        </View>




    </ScrollView>
  )
}

export default AboutSingleDecipheringDiariesScreen
