import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import CustomBtn from '../component/CustomBtn';
import FullStar from "../assets/svg/FullStar";
import { toggleQuote } from '../redux/slices/savedQuotes';

const LikedQuoteScreen = ({ navigation }) => {
    const savedQuotes = useSelector(state => state.quotes.savedQuotes);
    const dispatch = useDispatch();

    return (
        <ScrollView style={{ backgroundColor: '#000', flex: 1 }}>
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
                <Image source={require('../assets/img/Group48097023.png')} style={{ width: 80, position: 'absolute', top: 0, alignSelf: 'center' }} resizeMode={'contain'} />
            </>

            {savedQuotes.length > 0 ? (
                savedQuotes.map((quote, index) => (
                    <View key={index} style={{ flexDirection: 'column', alignItems: 'center', marginBottom: 10, marginTop: 50, paddingHorizontal: 24 }}>
                        <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold', marginBottom: 8 }}>
                            {quote.correct}
                        </Text>
                        <Image source={quote.image} style={{}} />
                        <Text style={{ fontSize: 16, color: 'white', paddingHorizontal: 24, textAlign: 'center', marginVertical: 20 }}>
                            {quote.quote}
                        </Text>
                        <View style={{ width: '100%', height: 2, backgroundColor: '#BC3D32' }} />
                        <TouchableOpacity onPress={() => dispatch(toggleQuote(quote))} style={{ position: 'absolute', right: 0, top: '30%' }}>
                            <FullStar />
                        </TouchableOpacity>
                    </View>
                ))
            ) : (
                <Text style={{ color: 'white', textAlign: 'center', marginTop: 50, fontSize: 18 }}>
                    No saved quotes yet.
                </Text>
            )}
            <View style={{marginBottom: 50}}/>
        </ScrollView>
    );
};

export default LikedQuoteScreen;
