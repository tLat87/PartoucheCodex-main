import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './src/redux/store';
import { Provider } from 'react-redux';
import MainTabNavigator from './src/navigation/MainTabNavigator';
import WelcomeScreen from './src/navigation/WelcomeScreen';
import {TouchableOpacity, Text, Share} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import SplashScreen from './src/screens/SplashScreen';
import DecipheringDiariesScreen from './src/screens/DecipheringDiariesScreen';
import BeginDecipheringDiariesScreen from './src/screens/BeginDecipheringDiariesScreen';
import AboutSingleDecipheringDiariesScreen from './src/screens/AboutSingleDecipheringDiariesScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import LikedQuoteScreen from "./src/screens/LikedQuotesScreen";
import BackBtnSvg from "./src/assets/svg/BackBtnSvg.tsx";
import ShareSvg from "./src/assets/svg/ShareSvg.tsx";
import WorldChangingStartScreen from "./src/screens/WorldChangingStartScreen";
import MoreFactDetailsScreen from "./src/screens/MoreFactDetailsScreen";
import SuggestOutcomeScreen from "./src/screens/SuggestOutcomeScreen";
import CompareAnswersScreen from "./src/screens/CompareAnswersScreen";
import ImprovementsScreen from "./src/screens/ImprovementsScreen";
import GameProccesScreen from "./src/screens/GameProccesScreen";
import BackgroundMusic from "./src/component/BackgroundMusic";

const Stack = createStackNavigator();

function CustomHeaderLeft() {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.goBack()}
      style={{ flexDirection: 'row', alignItems: 'center', paddingLeft: 10 }}
    >
      <BackBtnSvg/>
    </TouchableOpacity>
  );
}

const CustomHeaderRight = () => {

  const handleShare = async () => {
    try {
      await Share.share({
        message: 'The Partouche Codex is more than just an encyclopedia, it is a living space for learning, thinking and engaging with science.',
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
      <TouchableOpacity
          onPress={handleShare}
          style={{ flexDirection: 'row', alignItems: 'center', paddingRight: 10 }}
      >
        <ShareSvg />
      </TouchableOpacity>
  );
};

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BackgroundMusic />
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerStyle: {
            backgroundColor: '#1F1F1F',
          } ,
            headerLeft: CustomHeaderLeft,
            headerRight: CustomHeaderRight,
            headerTitleStyle:{
              color: 'white',
              fontSize: 28,
              fontFamily: 'Staatliches-Regular',
            },
          }}>
            <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Main" component={MainTabNavigator} options={{ headerShown: false }} />
            <Stack.Screen name="DecipheringDiaries" component={DecipheringDiariesScreen} options={{ headerTitle: 'Deciphering Diaries' }} />
            <Stack.Screen name="BeginDecipheringDiaries" component={BeginDecipheringDiariesScreen} options={{ headerTitle: 'Deciphering Diaries' }} />
            <Stack.Screen name="AboutSingleDecipheringDiaries" component={AboutSingleDecipheringDiariesScreen}  options={{ headerTitle: 'Scientist in details' }} />
            <Stack.Screen name="LikedQuote" component={LikedQuoteScreen}  options={{ headerTitle: 'Liked quotes' }} />
            <Stack.Screen name="WorldChangingStart" component={WorldChangingStartScreen}  options={{ headerTitle: 'World-Changing Discoveries' }} />
            <Stack.Screen name="MoreFactDetails" component={MoreFactDetailsScreen}  options={{ headerTitle: 'World-Changing Discoveries' }} />
            <Stack.Screen name="SuggestOutcome" component={SuggestOutcomeScreen}  options={{ headerTitle: 'World-Changing Discoveries' }} />
            <Stack.Screen name="CompareAnswers" component={CompareAnswersScreen}  options={{ headerTitle: 'World-Changing Discoveries' }} />
            <Stack.Screen name="Improvements" component={ImprovementsScreen}  options={{ headerTitle: 'World-Changing Discoveries' }} />
            <Stack.Screen name="GameProcces" component={GameProccesScreen}  options={{ headerShown: false }} />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}
