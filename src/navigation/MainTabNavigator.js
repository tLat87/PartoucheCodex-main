import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import { useNavigation } from '@react-navigation/native';
import SomeFileSvg from '../assets/svg/SomeFileSvg';
import BraineSvg from '../assets/svg/BraineSvg';
import BookSvg from '../assets/svg/BookSvg';
import PixelPlusSvg from '../assets/svg/PixelPlusSvg';
import SettingsFirstSvg from '../assets/svg/SettingsFirstSvg';
import SecondScreen from '../screens/SecondScreen';
import ThirdScreen from '../screens/ThirdScreen';
import ForthScreen from '../screens/ForthScreen';
import FifthScreen from '../screens/FifthScreen';
import {Share, TouchableOpacity, Vibration} from "react-native";
import ShareSvg from "../assets/svg/ShareSvg";
import {useSelector} from "react-redux";

const Tab = createBottomTabNavigator();

const CustomHeaderRight = () => {
  const isVibrationOn = useSelector(state => state.settings.isVibrationOn);
  const handleShare = async () => {
    if (isVibrationOn) {
      Vibration.vibrate(50);
    }
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

const MainTabNavigator = () => {
  return (
      <Tab.Navigator
          screenOptions={({ route }) => ({
            headerStyle: { backgroundColor: '#1F1F1F' },
            tabBarStyle: { backgroundColor: '#000', elevation: 0, shadowOpacity: 0 }, // Убираем тень
            tabBarIcon: ({ focused }) => {
              let IconComponent;

              if (route.name === 'Home') {
                IconComponent = SettingsFirstSvg;
              } else if (route.name === 'Second') {
                IconComponent = SomeFileSvg;
              } else if (route.name === 'Third') {
                IconComponent = BraineSvg;
              } else if (route.name === 'Forth') {
                IconComponent = BookSvg;
              } else if (route.name === 'Fifth') {
                IconComponent = PixelPlusSvg;
              }

              return <IconComponent width={28} height={28} color={focused ? '#BC3D32' : '#aaaaaa'} />;
            },
            tabBarActiveTintColor: '#BC3D32',
            tabBarInactiveTintColor: '#aaaaaa',
            headerRight: CustomHeaderRight
          })}
      >
        <Tab.Screen name="Home" component={HomeScreen} options={{
          headerTitle: 'Settings',
          tabBarLabel: '',
          headerTitleStyle: {
            color: 'white',
            fontSize: 28,
            fontFamily: 'Staatliches-Regular',
          },
        }} />
        <Tab.Screen name="Second" component={SecondScreen} options={{
          headerTitle: 'Create Your Discovery!',
          tabBarLabel: '',
          headerTitleStyle: {
            fontFamily: 'Staatliches-Regular',
            fontSize: 28,
            color: 'white',
          },
        }} />
        <Tab.Screen name="Third" component={ThirdScreen} options={{
          headerTitle: 'Secret Pages of Science',
          tabBarLabel: '',
          headerTitleStyle: {
            fontFamily: 'Staatliches-Regular',
            fontSize: 28,
            color: 'white',
          },
        }} />
        <Tab.Screen name="Forth" component={ForthScreen} options={{
          headerTitle: 'World-Changing Discoveries',
          tabBarLabel: '',
          headerTitleStyle: {
            fontFamily: 'Staatliches-Regular',
            fontSize: 28,
            color: 'white',
          },
        }} />
        {/*<Tab.Screen name="Fifth" component={FifthScreen} options={{*/}
        {/*  headerTitle: 'Atomic Jumper',*/}
        {/*  tabBarLabel: '',*/}
        {/*  headerTitleStyle: {*/}
        {/*    fontFamily: 'Staatliches-Regular',*/}
        {/*    fontSize: 28,*/}
        {/*    color: 'white',*/}
        {/*  },*/}
        {/*}} />*/}
      </Tab.Navigator>
  );
};

export default MainTabNavigator;
