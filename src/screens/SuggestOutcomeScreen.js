import {View, Text, Image, ScrollView, TextInput} from 'react-native';
import CustomBtn from '../component/CustomBtn';
import React, {useState} from 'react';

const SuggestOutcomeScreen = ({ navigation, route}) => {
    const [inputText, setInputText] = useState("");
    const {title, full, description, image} = route.params;

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
                <Text style={{fontSize: 20, color: 'white', fontWeight: 'bold'}}>
                    {title}
                </Text>
                <View style={{alignItems: 'center', marginBottom: 30, width: '80%'}}>
                    <View style={{backgroundColor: '#fff', width: '110%', padding: 20, marginTop: 10,borderRadius: 10}}>
                        <Text style={{fontSize: 16, fontWeight: 'bold'}}>
                            📜 Description:
                        </Text>
                        <Text>
                            {description}
                        </Text>
                    </View>
                </View>

                <Text style={{fontSize: 20, color: 'white'}}>
                    What happened next?
                </Text>
                <TextInput
                    style={{
                        width: "88%",
                        height:120,
                        borderWidth: 2,
                        borderColor: "white",
                        backgroundColor: "black",
                        color: "white",
                        padding: 10,
                        borderRadius: 10,
                        marginTop: 10,
                        marginBottom: 30
                    }}
                    placeholder="Enter your thoughts..."
                    placeholderTextColor="#aaaaaa"
                    value={inputText}
                    onChangeText={setInputText}
                />
                <CustomBtn title='Save' onPress={() => navigation.navigate('CompareAnswers', {full, title, image})} />
            </View>

        </ScrollView>
    )
}

export default SuggestOutcomeScreen
