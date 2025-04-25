import { View, Text, Image, TouchableOpacity } from 'react-native';
import CustomBtn from '../component/CustomBtn';
import EmptyStar from '../assets/svg/EmptyStar';
import React, { useState } from 'react';
import {toggleQuote} from "../redux/slices/savedQuotes";
import {useDispatch, useSelector} from "react-redux";
import FullStar from "../assets/svg/FullStar";

// Список цитат
const quotes = [
    // {
    //     quote: "I don’t think physics is a field for women. But despite that, I cannot imagine my life without studying radiation.",
    //     options: [
    //         { name: "Marie Curie", image: require("../assets/img/1") },
    //         { name: "Albert Einstein", image: require("../assets/img/scientists/einstein.png") },
    //         { name: "Dmitri Mendeleev", image: require("../assets/img/scientists/mendeleev.png") }
    //     ],
    //     correct: "Marie Curie",
    // },
    {
        quote: "In the future, wireless energy transmission will change the world, and people will no longer depend on wires.",
        options: [
            { name: "Thomas Edison", image: require("../assets/img/1/Rectangle24.png") },
            { name: "Nikola Tesla", image: require("../assets/img/1/Rectangle25.png") },
            { name: "Heinrich Hertz", image: require("../assets/img/1/Rectangle26.png") }
        ],
        correct: "Nikola Tesla",
        full:"📖 Short Article:\n" +
            "Nikola Tesla was a visionary inventor and engineer who developed alternating current, radio control, and the foundations of wireless energy transmission. His ideas were far ahead of his time and influenced modern technology.\n" +
            "\n" +
            "⚡ Key Discoveries:\n" +
            "\t•\tAlternating current and the Tesla coil.\n" +
            "\t•\tRadio control and wireless energy transmission.\n" +
            "\t•\tEarly ideas for wireless internet.\n" +
            "\n" +
            "💡 Fun Fact:\n" +
            "Tesla claimed to have invented a “death ray” capable of destroying entire armies, but the blueprints mysteriously disappeared after his death."
    },
    {
        quote: "I am convinced that microbes cause diseases, and in the future, we will be able to fight infections by creating vaccines.",
        options: [
            { name: "Robert Koch", image: require("../assets/img/3/Rectangle27.png") },
            { name: "Louis Pasteur", image: require("../assets/img/3/Rectangle29.png") },
            { name: "Alexander Fleming", image: require("../assets/img/3/Rectangle28.png") }
        ],
        correct: "Louis Pasteur",
        full:"📖 Short Article:\n" +
            "Louis Pasteur was the father of microbiology and immunology. He proved that microorganisms cause diseases, developed vaccines, and introduced pasteurization, saving millions of lives.\n" +
            "\n" +
            "⚡ Key Discoveries:\n" +
            "\t•\tDevelopment of vaccines for rabies and anthrax.\n" +
            "\t•\tDiscovery of bacteria’s role in fermentation and disease.\n" +
            "\t•\tCreation of the pasteurization process.\n" +
            "\n" +
            "💡 Fun Fact:\n" +
            "Pasteur was so afraid of germs that he washed his hands frequently—long before hygiene became a medical standard."
    },
    {
        quote: "And yet, it moves…",
        options: [
            { name: "Isaac Newton", image: require("../assets/img/5/Rectangle30.png") },
            { name: "Galileo Galilei", image: require("../assets/img/5/Rectangle32.png")},
            { name: "Giordano Bruno", image: require("../assets/img/5/Rectangle31.png") }
        ],
        correct: "Galileo Galilei",
        full:"📖 Short Article:\n" +
            "Galileo Galilei was the “father of modern astronomy,” who proved that the Earth orbits the Sun. He improved the telescope, discovered Jupiter’s moons, and laid the foundations of physics.\n" +
            "\n" +
            "⚡ Key Discoveries:\n" +
            "\t•\tConfirmation of the heliocentric system.\n" +
            "\t•\tDiscovery of Jupiter’s moons.\n" +
            "\t•\tStudies on motion and inertia.\n" +
            "\n" +
            "💡 Fun Fact:\n" +
            "Galileo went blind in his later years but continued working by dictating his research to students."
    },
    {
        quote: "I saw the table of elements in my dream, where each element was in its proper place.",
        options: [
            { name: "Albert Einstein", image: require("../assets/img/4/Rectangle33.png") },
            { name: "Dmitri Mendeleev", image: require("../assets/img/4/Rectangle35.png") },
            { name: "Ernest Rutherford", image: require("../assets/img/4/Rectangle34.png") }
        ],
        correct: "Dmitri Mendeleev",
        full:'📖 Short Article:\n' +
            'Dmitri Mendeleev was a brilliant chemist who systematically classified chemical elements and predicted the existence of new ones. His periodic table became the foundation of modern chemistry.\n' +
            '\n' +
            '⚡ Key Discoveries:\n' +
            '\t•\tCreation of the periodic table.\n' +
            '\t•\tPrediction of unknown elements’ properties.\n' +
            '\t•\tDevelopment of oil and gunpowder standards.\n' +
            '\n' +
            '💡 Fun Fact:\n' +
            'Mendeleev invented the suitcase and personally designed its structure because he couldn’t find a convenient one for travel'
    },
    {
        quote: "Imagination is more important than knowledge. Knowledge is limited, but imagination embraces the entire world.",
        options: [
            { name: "Albert Einstein", image: require("../assets/img/2/Rectangle36.png") },
            { name: "Werner Heisenberg", image: require("../assets/img/2/Rectangle38.png") },
            { name: "Max Planck", image: require("../assets/img/2/Rectangle37.png") }
        ],
        correct: "Albert Einstein",
        full:"📖 Short Article:\n" +
            "Albert Einstein was a genius physicist who revolutionized our understanding of time, space, and energy. His theory of relativity changed science forever and laid the foundation for modern technology.\n" +
            "\n" +
            "⚡ Key Discoveries:\n" +
            "\t•\tTheory of relativity.\n" +
            "\t•\tExplanation of the photoelectric effect (for which he won the Nobel Prize).\n" +
            "\t•\tDevelopment of quantum mechanics principles.\n" +
            "\n" +
            "💡 Fun Fact:\n" +
            "Einstein never wore socks because he considered them useless—they always got holes in them."
    }
];


const BeginDecipheringDiariesScreen = ({ navigation }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);
    const [isAnswered, setIsAnswered] = useState(false);
    const dispatch = useDispatch();
    const savedQuotes = useSelector(state => state.quotes?.savedQuotes || []);

    const currentQuote = quotes[currentIndex];
    const isSaved = savedQuotes?.some(q => q.quote === currentQuote?.quote);

    const handleAnswer = (option) => {
        if (isAnswered) return;
        setSelectedOption(option);
        setIsAnswered(true);
    };

    const handleSave = (quote) => {
        console.log('quote: ',quote);
        dispatch(toggleQuote(quote));
    };


    const handleNext = () => {
        if (!isAnswered) return; // Если не выбран вариант, кнопка не работает

        if (currentIndex < quotes.length - 1) {
            setCurrentIndex(currentIndex + 1);
            setSelectedOption(null);
            setIsAnswered(false);
        } else {
            alert("You've completed all quotes!");
            setCurrentIndex(0);
        }
    };

    return (
        <View style={{ backgroundColor: '#000', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <>
                <View style={{
                    backgroundColor: '#1F1F1F',
                    width: '100%',
                    height: 160,
                    position: 'absolute',
                    borderRadius: 990 / 2,
                    top: -80,
                    transform: [{ scaleY: 0.4 }],
                }} />
                <Image source={require('../assets/img/Group48097023.png')} style={{ width: 80, position: 'absolute', top: 0 }} resizeMode={'contain'} />
            </>

            <TouchableOpacity onPress={() => handleSave(currentQuote)} style={{position: 'absolute', top: 50, left: 20, width: '100%'}} >
                    {isSaved ? <FullStar/> : <EmptyStar/>}
            </TouchableOpacity>

            <View style={{ flexDirection: 'row', justifyContent: 'space-around', gap: 20, marginBottom: 20 }}>
                <TouchableOpacity
                    onPress={() => { if (isAnswered) navigation.navigate('AboutSingleDecipheringDiaries', {full: currentQuote.full, name: currentQuote.correct}) }}
                    style={{
                        borderColor: '#BC3D32',
                        borderWidth: 3,
                        padding: 16,
                        borderRadius: 10,
                        width: 100,
                        alignItems: 'center',
                        opacity: isAnswered ? 1 : 0.5 // Делаем кнопку полупрозрачной, если нет выбора
                    }}
                    disabled={!isAnswered} // Отключаем кнопку, если нет выбора
                >
                    <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 20 }}>About</Text>
                </TouchableOpacity>

                <CustomBtn title='Next' onPress={handleNext} stylesAdd={{ width: 100, opacity: isAnswered ? 1 : 0.5 }} disabled={!isAnswered} />
            </View>

            <Text style={{
                color: '#fff',
                fontSize: 18,
                fontStyle: 'italic',
                textAlign: 'center',
                fontFamily: 'serif',
                marginBottom: 50,
            }}>
                {currentQuote.quote}
            </Text>

            <View style={{ flexDirection: 'row', justifyContent: 'space-around', width: '80%', marginBottom: 10, gap: 20, marginLeft: -20 }}>
                {currentQuote.options.slice(0, 2).map((option, index) => {
                    let bgColor = '#1F1F1F';
                    if (isAnswered) {
                        if (option.name === currentQuote.correct) {
                            bgColor = '#4CAF50';
                        } else if (option.name === selectedOption) {
                            bgColor = '#BC3D32';
                        }
                    }

                    return (
                        <TouchableOpacity
                            key={index}
                            onPress={() => handleAnswer(option.name)}
                            style={{ alignItems: 'center', borderRadius: 10 }}>
                            <Image source={option.image} style={{ borderRadius: 10 }} resizeMode="contain" />
                            <Text style={{ color: bgColor, fontSize: 16, fontWeight: 'bold', marginTop: 5 }}>{option.name}</Text>
                        </TouchableOpacity>
                    );
                })}
            </View>

            <View style={{ alignItems: 'center', marginBottom: 20 }}>
                {currentQuote.options.slice(2, 3).map((option, index) => {
                    let bgColor = '#1F1F1F';
                    if (isAnswered) {
                        if (option.name === currentQuote.correct) {
                            bgColor = '#4CAF50';
                        } else if (option.name === selectedOption) {
                            bgColor = '#BC3D32';
                        }
                    }

                    return (
                        <TouchableOpacity
                            key={index}
                            onPress={() => handleAnswer(option.name)}
                            style={{ alignItems: 'center', borderRadius: 10 }}>
                            <Image source={option.image} style={{ borderRadius: 10 }} resizeMode="contain" />
                            <Text style={{ color: bgColor, fontSize: 16, fontWeight: 'bold', marginTop: 5 }}>{option.name}</Text>
                        </TouchableOpacity>
                    );
                })}
            </View>
        </View>
    );
}

export default BeginDecipheringDiariesScreen;