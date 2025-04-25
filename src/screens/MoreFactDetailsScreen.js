import {View, Text, Image, TouchableOpacity} from 'react-native';
import CustomBtn from '../component/CustomBtn';
import React from 'react';
import FullStar from '../assets/svg/FullStar';
import PrevSvg from "../assets/svg/PrevSvg";
import RndmSvg from "../assets/svg/RndmSvg";
import FilterSvg from "../assets/svg/FilterSvg";

const MoreFactDetailsScreen = ({ navigation, route }) => {
    const {title, image, full } = route.params;
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

            <Text style={{color: 'white', fontSize: 20, paddingHorizontal: 24, marginBottom: 20, fontWeight: 'bold', marginTop: -150}}>
                📌 {title}
            </Text>
            <Image source={image}/>
            <Text style={{color: 'white', fontSize: 16, paddingHorizontal: 24, marginTop: 20}}>
                {full}
            </Text>
        </View>
    )
}

export default MoreFactDetailsScreen
