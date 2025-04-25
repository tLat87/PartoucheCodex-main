import {View, Text, Image, ScrollView, TextInput} from 'react-native';
import CustomBtn from '../component/CustomBtn';
import React, {useState} from 'react';

const CompareAnswersScreen = ({ navigation, route }) => {
    const {title, full, image} = route.params;

    return (
        <ScrollView style={{flex: 1, backgroundColor: '#000'}}>
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
                <Image source={require('../assets/img/Group48097023.png')} style={{width: 80, position: 'absolute', top: 0, alignSelf: 'center'}} resizeMode={'contain'} />
            </>
            w
            <View style={{alignItems: 'center', marginTop: 60 }}>
                <Text style={{fontSize: 20, color: 'white', fontWeight: 'bold', marginBottom: 10}}>
                    {title}
                </Text>
                <View style={{alignItems: 'center', marginBottom: 30, width: '80%'}}>
                    <Image source={image}  resizeMode={'contain'} />

                    <View style={{backgroundColor: '#fff', width: '110%', padding: 20, marginTop: -1,borderBottomLeftRadius: 10, borderBottomRightRadius: 10}}>
                        <Text style={{fontSize: 16, fontWeight: 'bold'}}>
                            📜 Full Story:
                        </Text>
                        <Text>
                            {full}
                        </Text>
                    </View>
                </View>
                <CustomBtn title='I got it!' onPress={() => navigation.pop(3)}/>
            </View>

        </ScrollView>
    )
}

export default CompareAnswersScreen