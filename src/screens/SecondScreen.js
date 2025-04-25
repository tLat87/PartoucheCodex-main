import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import CustomBtn from '../component/CustomBtn';
import React, { useState, useEffect } from 'react';
import RndmSvg from "../assets/svg/RndmSvg";

// JSON с фактами
const facts = [
    {
        title: "Einstein’s Equation Mistake",
        image: require('../assets/img/Rectangle413.png'),
        description: "In the early 20th century, Albert Einstein was working on his revolutionary theory of relativity. While calculating the behavior of the universe, he made an error and added a new term, thinking it would explain the universe’s stability. He concluded that…",
        full:"Einstein added the “cosmological constant” to his equations to make the universe appear static. Later, it was discovered that the universe was expanding, and this adjustment was a mistake. Einstein later called it his “greatest blunder.” This error became a key moment in the development of astrophysics."
    },
    {
        title: "The Creation of the First Airplane",
        image: require('../assets/img/Rectangle414.png'),
        description:"In 1903, the Wright brothers, Orville and Wilbur, tested their first powered airplane at Kitty Hawk, North Carolina. Their aircraft, equipped with a motor and wings, was supposed to make the first successful flight. When they started the engine, the plane lifted off the ground but unexpectedly began…",
        full:"When the Wright brothers took off, the plane was slightly unstable, but they managed to control it, making it the first successful flight with a motor. They stayed in the air for about 12 seconds, covering approximately 36.5 meters. This was a historic event that laid the foundation for aviation."
    },
    {
        title: "The Discovery of Radioactivity",
        image: require('../assets/img/Rectangle415.png'),
        description:'In 1896, French scientist Antoine Becquerel was conducting experiments with uranium, trying to study its fluorescence. He left a piece of uranium on a photographic plate, and when he returned days later, he found that there were spots on the plate, despite there being no light. He decided…',
        full:"Becquerel discovered that uranium emitted invisible rays, which could affect photographic plates. This led to the discovery of radioactivity and became the foundation for the development of nuclear physics. Later, Marie and Pierre Curie discovered that other elements, like radium, also exhibited radioactivity."
    },
    {
        title: "The Discovery of Insulin",
        image: require('../assets/img/Rectangle416.png'),
        description: 'In 1921, Canadian scientist Frederick Banting was conducting experiments on dogs to understand the relationship between the pancreas and diabetes. After removing part of a dog’s pancreas, the animal began to suffer from severe hyperglycemia. Banting then…',
        full:'Banting and his team realized that the pancreas produces hormones that regulate blood sugar levels. Banting extracted insulin from the pancreas and, when injected into the dogs, their blood sugar levels normalized. This became the foundation for treating diabetes in humans and saved many lives.'
    }
];

const SecondScreen = ({ navigation }) => {
    const [randomFact, setRandomFact] = useState(null);

    const handleRandom = () => {
        const random = facts[Math.floor(Math.random() * facts.length)];
        setRandomFact(random);
    };

    useEffect(() => {
        handleRandom();
    }, []);

    return (
        <ScrollView style={{ flex: 1, backgroundColor: '#000' }}>
            <>
                <View style={{
                    backgroundColor: '#1F1F1F',
                    width: '100%',
                    position: 'absolute',
                    height: 160,
                    borderRadius: 990 / 2,
                    top: -80,
                    transform: [{ scaleY: 0.4 }],
                }} />
                <Image source={require('../assets/img/Group48097023.png')} style={{ width: 80, position: 'absolute', top: 0, alignSelf: 'center' }} resizeMode={'contain'} />
            </>

            <View style={{ alignItems: 'center', marginTop: 60 }}>

                {randomFact && (
                    <>
                        <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold', marginBottom: 10 }}>
                            {randomFact.title}
                        </Text>
                        <View style={{ alignItems: 'center', marginBottom: 30, width: '80%' }}>
                            <Image source={randomFact.image} resizeMode={'contain'} />
                            <View style={{ backgroundColor: '#fff', width: '110%', padding: 20, marginTop: -1, borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }}>
                                <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
                                    📜 Description:
                                </Text>
                                <Text>{randomFact.description}</Text>
                            </View>
                        </View>
                    </>
                )}

                <CustomBtn title='Suggest an outcome' onPress={() => navigation.navigate('SuggestOutcome', {title: randomFact.title, full: randomFact.full, description: randomFact.description,  image: randomFact.image})} />

                <TouchableOpacity
                    onPress={handleRandom}
                    style={{ backgroundColor: '#BC3D32', marginTop: 20, alignItems: 'center', padding: 12, borderRadius: 8 }}>
                    <RndmSvg />
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

export default SecondScreen;
