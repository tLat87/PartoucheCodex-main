import { View, Text, Image, TouchableOpacity } from 'react-native';
import CustomBtn from '../component/CustomBtn';
import React, { useState } from 'react';
import PrevSvg from "../assets/svg/PrevSvg";
import RndmSvg from "../assets/svg/RndmSvg";
import FilterSvg from "../assets/svg/FilterSvg";

const facts = [
    {
        title: "Theory of Relativity",
        description: "Changed the understanding of time, space, and energy. Used in space technology and GPS.",
        image: require('../assets/img/Rectangle393.png'),
        full:"Albert Einstein’s Theory of Relativity, published in 1905, radically changed the understanding of time, space, and energy. According to this theory, space and time are not absolute but depend on speed and gravity. The theory had a huge impact on physics and has influenced technologies such as GPS, which rely on time corrections based on relativity principles. This discovery changed views of the universe and laid the foundation for cosmological and astrophysical research.\n"
    },
    {
        title: "Periodic Table of Mendeleev",
        description: "Organized knowledge about chemical elements and contributed to the development of chemistry and materials science.",
        image: require('../assets/img/Rectangle395.png'),
        full:"In 1869, Dmitri Mendeleev created the Periodic Table of Chemical Elements, which systematized all known elements based on their atomic masses and properties. This discovery became the cornerstone of chemistry, enabling scientists to predict the properties of yet-to-be-discovered elements. The Periodic Table made significant contributions to the development of chemistry, materials science, and physics, providing a universal framework for studying chemical reactions and elements."
    },

    {
        title: "Discovery of Penicillin",
        description: "Saved millions of lives and laid the foundation for modern antibiotic therapy.",
        image: require('../assets/img/Rectangle97.png'),
        full:'In 1928, Alexander Fleming made one of the most important discoveries in the history of medicine—penicillin, the first antibiotic. This discovery revolutionized medicine by saving millions of lives from infectious diseases. Penicillin laid the foundation for modern antibiotic therapy and has been crucial in fighting infections. Modern medicine would be unthinkable without antibiotics, and penicillin continues to play a key role in treating infections.'
    },
    {
        title: "Vaccination",
        description: "Helped eradicate dangerous diseases such as smallpox and polio.",
        image: require('../assets/img/Rectangle98.png'),
        full: 'Vaccination became one of the most important achievements in the fight against infectious diseases. The practice of introducing weakened or killed microorganisms into the body to develop immunity helped eradicate many dangerous diseases such as smallpox and polio. Vaccination has played a central role in improving life expectancy and quality of life worldwide. This discovery has saved millions of lives and remains the foundation of modern disease prevention methods.'
    },

    {
        title: "Invention of the Internal Combustion Engine",
        description: "Led to the development of automobiles, aviation, and industrialization.",
        image: require('../assets/img/Rectangle401.png'),
        full: "In the late 19th century, the invention of the internal combustion engine revolutionized transportation. This engine became the foundation for automobiles, airplanes, and other vehicles, greatly accelerating the movement of people and goods. With the development of the internal combustion engine, the era of mass automobilization began, leading to rapid growth in urban infrastructure and transforming the global economy."
    },
    {
        title: "First Flight of the Wright Brothers",
        description: "The beginning of the aviation era, making the world more connected.",
        image: require('../assets/img/Rectangle402.png'),
        full: 'In 1903, the Wright brothers made the first controlled flight of an engine-powered airplane, marking a breakthrough in the history of transportation. Their success opened a new era in aviation, dramatically changing travel and trade. Since then, aviation has played a key role in globalization, providing fast and safe transportation for people and goods around the world.'
    },

    {
        title: "Invention of Electricity",
        description: "Made modern technologies possible, from light bulbs to the internet.",
        image: require('../assets/img/Rectangle405.png'),
        full: "The discovery and practical use of electricity in the late 19th century sparked a revolution in technology. Electricity became the foundation for the creation of countless innovative devices, from simple light bulbs to high-speed computers. This discovery changed nearly every aspect of human life— from industry to daily life, from medicine to communications, and continues to shape the modern world."
    },
    {
        title: "Creation of the Internet",
        description: "Fundamentally changed communication, business, and access to information.",
        image: require('../assets/img/Rectangle06.png'),
        full: 'The discovery and practical use of electricity in the late 19th century sparked a revolution in technology. Electricity became the foundation for the creation of countless innovative devices, from simple light bulbs to high-speed computers. This discovery changed nearly every aspect of human life— from industry to daily life, from medicine to communications, and continues to shape the modern world.'
    },


    {
        title: "Invention of the Gutenberg Printing Press",
        description: "Made books accessible and accelerated the spread of knowledge.",
        image: require('../assets/img/Rectangle09.png'),
        full:'In 1440, Johann Gutenberg invented the printing press, which revolutionized the distribution of knowledge. This discovery made it possible to mass-produce books and documents, making knowledge accessible to a wider audience. The printing press became the foundation of the Scientific Revolution and the Renaissance, accelerating the spread of ideas and contributing to the development of education and culture in Europe and beyond.'
    },
    {
        title: "Cinema and Animation",
        description: "Transformed art into mass culture, creating an entire entertainment industry.",
        image: require('../assets/img/Rectangle410.png'),
        full:"Cinema and animation, which emerged in the late 19th century, changed the arts and mass culture, becoming major forms of entertainment. With the development of cinema and animation, an entire industry was born, influencing public and cultural processes around the world. These art forms also became important tools for spreading ideas and ideologies, offering audiences new ways to perceive reality."
    },
];

const WorldChangingStartScreen = ({ navigation }) => {
    const [index, setIndex] = useState(0);

    const handleNext = () => {
        setIndex((prevIndex) => (prevIndex + 1) % facts.length);
    };

    const handlePrev = () => {
        setIndex((prevIndex) => (prevIndex - 1 + facts.length) % facts.length);
    };

    const handleRandom = () => {
        let randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * facts.length);
        } while (randomIndex === index);
        setIndex(randomIndex);
    };

    return (
        <View style={{ flex: 1, backgroundColor: '#000', alignItems: 'center', justifyContent: 'center' }}>
            {/*<TouchableOpacity onPress={() => { }} style={{ position: 'absolute', top: 70, right: 24 }}>*/}
            {/*    <FilterSvg />*/}
            {/*</TouchableOpacity>*/}

            <Text style={{ color: '#fff', textAlign: 'center', fontSize: 20, fontWeight: 'bold', marginBottom: 18 }}>
                📌 {facts[index].title}
            </Text>

            <View style={{ alignItems: 'center', marginBottom: 30, width: '80%' }}>
                <Image source={facts[index].image} resizeMode={'contain'} />
                <View style={{ backgroundColor: '#fff', width: '110%', padding: 20, marginTop: -10, borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }}>
                    <Text>📖 Description:</Text>
                    <Text>{facts[index].description}</Text>
                </View>
            </View>

            <CustomBtn onPress={() => navigation.navigate('MoreFactDetails', {title: facts[index].title, image: facts[index].image, full: facts[index].full})} title='More details' stylesAdd={{ width: '90%' }} />

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '90%', marginTop: 20 }}>
                <TouchableOpacity onPress={handlePrev}>
                    <PrevSvg />
                </TouchableOpacity>

                <TouchableOpacity onPress={handleNext}>
                    <View style={{ transform: [{ scaleX: -1 }] }}>
                        <PrevSvg />
                    </View>
                </TouchableOpacity>
            </View>

            <TouchableOpacity onPress={handleRandom} style={{ backgroundColor: '#BC3D32', marginTop: 20, alignItems: 'center', padding: 12, borderRadius: 8 }}>
                <RndmSvg />
            </TouchableOpacity>

            <Text style={{ color: '#fff', textAlign: 'center', fontSize: 14, marginTop: 18 }}>
                Accidental discovery – generation of a random fact.
            </Text>
        </View>
    );
};

export default WorldChangingStartScreen;