import React, { useEffect, useRef } from 'react';
import { View, Animated, Text, StyleSheet } from 'react-native';

const SplashScreen = ({ navigation }) => {
  const crownPosition = useRef(new Animated.Value(-200)).current; // Начальная позиция короны (выше экрана)
  const textPosition = useRef(new Animated.Value(0)).current; // Начальная позиция текста (ниже экрана)

  useEffect(() => {
    Animated.parallel([
      Animated.timing(crownPosition, {
        toValue: 250,
        duration: 2000,
        useNativeDriver: true,
      }),
      Animated.timing(textPosition, {
        toValue: -435,
        duration: 2000,
        useNativeDriver: true,
      }),
    ]).start(() => {
      navigation.replace('Welcome');
    });
  }, []);

  return (
    <View style={{backgroundColor: '#000', flex: 1, alignItems: 'center'}}>
      <Animated.Image
        source={require('../assets/img/Gr019.png')}
        style={[styles.crown, { transform: [{ translateY: crownPosition }] }]}
        resizeMode="contain"
      />
      <Animated.Text
        style={[styles.text, { transform: [{ translateY: textPosition }] }]}
      >
        artouche
      </Animated.Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  crown: {
    width: 120,
    height: 200,
    position: 'absolute',
    top: 0,
    marginRight: 100
  },
  text: {
    fontSize: 64,
    fontFamily: 'Staatliches-Regular',
    color: 'white',
    position: 'absolute',
    bottom: 0,
    marginLeft: 130
  },
});

export default SplashScreen;
