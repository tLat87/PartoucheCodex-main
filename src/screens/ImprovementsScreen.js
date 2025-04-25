import {Image, Text, View} from 'react-native';
import CustomBtn from '../component/CustomBtn';
import React from 'react';
import SomeReactSvg from "../assets/svg/SomeReactSvg";
import MainWhiteReactSvg from "../assets/svg/MainWhiteReactSvg";

const ImprovementsScreen = ({ navigation }) => {
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

            <View style={{position: 'absolute', top: 100,width: '100%', alignItems: 'center',}}>
                <CustomBtn onPress={() => {}} title='Improve' stylesAdd={{marginBottom: 8, width: '40%'}}/>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Text style={{fontSize: 24, fontWeight: 'bold', color: '#BC3D32', marginRight: 8}}>
                        20
                    </Text>
                    <SomeReactSvg/>
                </View>
            </View>

            {/*<Text style={{fontSize: 18, fontWeight: 'bold', color: '#fff', width: '90%', textAlign: 'center'}}>*/}
            {/*    You have reached the maximum improvement.*/}
            {/*</Text>*/}

            <MainWhiteReactSvg/>


            <View style={{position: 'absolute', bottom: 100, left: -100, width: '100%', alignItems: 'center',}}>
                <CustomBtn onPress={() => {}} title='Improve' stylesAdd={{marginBottom: 8, width: '30%'}}/>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Text style={{fontSize: 24, fontWeight: 'bold', color: '#BC3D32', marginRight: 8}}>
                        50
                    </Text>
                    <SomeReactSvg/>
                </View>
            </View>

            <View style={{position: 'absolute', bottom: 100, right: -100, width: '100%', alignItems: 'center',}}>
                <CustomBtn onPress={() => {}} title='Improve' stylesAdd={{marginBottom: 8, width: '30%'}}/>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Text style={{fontSize: 24, fontWeight: 'bold', color: '#BC3D32', marginRight: 8}}>
                        100
                    </Text>
                    <SomeReactSvg/>
                </View>
            </View>

        </View>
    )
}

export default ImprovementsScreen
