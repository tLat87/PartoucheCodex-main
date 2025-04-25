import { Image, Text, View, Animated } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import SomeReactSvg from "../assets/svg/SomeReactSvg";
import MainWhiteReactSvg from "../assets/svg/MainWhiteReactSvg";
import { PanGestureHandler } from 'react-native-gesture-handler';
import { Dimensions } from 'react-native';

const GameProccesScreen = ({ navigation }) => {
    const { width } = Dimensions.get('window');
    const moveAnim = useRef(new Animated.Value(0)).current;
    const translateY = useRef(new Animated.Value(0)).current;

    const [isCollected1, setIsCollected1] = useState(false);
    const [isCollected2, setIsCollected2] = useState(false);
    const [isCollected3, setIsCollected3] = useState(false);
    const [isCollected4, setIsCollected4] = useState(false);

    // Состояние для отслеживания счета
    const [score, setScore] = useState(0);

    const [svgPosition, setSvgPosition] = useState({ x: 0, y: 0 });
    const svgRef = useRef(null); // Ссылка на компонент MainWhiteReactSvg

    useEffect(() => {
        const moveLoop = () => {
            Animated.sequence([
                Animated.timing(moveAnim, {
                    toValue: -width,
                    duration: 2000,
                    useNativeDriver: true,
                }),
                Animated.timing(moveAnim, {
                    toValue: 0,
                    duration: 2000,
                    useNativeDriver: true,
                })
            ]).start(() => moveLoop());
        };

        moveLoop();

        // Функция для регулярной проверки позиции
        const checkPosition = () => {
            if (svgRef.current) {
                svgRef.current.measure((x, y, width, height, pageX, pageY) => {
                    setSvgPosition({ x: pageX, y: pageY });


                    if (!isCollected1 && pageX >= 70 && pageX <= 90 && pageY >= 400 && pageY <= 420) {
                        setScore(prevScore => prevScore + 10);
                        setIsCollected1(true);
                    }

                    if (!isCollected2 && pageX >= 360 && pageX <= 380 && pageY >= 320 && pageY <= 340) {
                        setScore(prevScore => prevScore + 10);
                        setIsCollected2(true);
                    }

                    if (!isCollected3 && pageX >= 300 && pageX <= 320 && pageY >= 450 && pageY <= 470) {
                        setScore(prevScore => prevScore + 10);
                        setIsCollected3(true);
                    }

                    if (!isCollected4 && pageX >= 20 && pageX <= 40 && pageY >= 610 && pageY <= 630) {
                        setScore(prevScore => prevScore + 10);
                        setIsCollected4(true);
                    }

                });
            }

            // Повторяем проверку каждую 500ms
            requestAnimationFrame(checkPosition);
        };

        checkPosition(); // Начинаем проверку

        // Очистка при размонтировании компонента
        return () => cancelAnimationFrame(checkPosition);
    }, [width]);

    const onGestureEvent = Animated.event(
        [{ nativeEvent: { translationY: translateY } }],
        { useNativeDriver: true }
    );

    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#000',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            position: 'absolute',
            top: 80,
            right: 10,
          }}>
          <SomeReactSvg />
          <Text
            style={{
              fontSize: 32,
              marginLeft: 8,
              color: '#BC3D32',
              textAlign: 'center',
              fontFamily: 'Staatliches-Regular',
            }}>
            {score} {/* Отображение счета */}
          </Text>
        </View>

        <View
          style={{
            position: 'absolute',
            top: 130,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Image
            source={require('../assets/img/game/HeadH.png')}
            style={{marginRight: -1}}
          />
          <Image
            source={require('../assets/img/game/HeadH.png')}
            style={{marginRight: -1}}
          />
          <Image
            source={require('../assets/img/game/HeadH.png')}
            style={{marginRight: -1}}
          />
          <Image
            source={require('../assets/img/game/HeadH.png')}
            style={{marginRight: -1}}
          />
          <Image
            source={require('../assets/img/game/HeadH.png')}
            style={{marginRight: -1}}
          />
        </View>

        <View
          style={{
            position: 'absolute',
            bottom: 120,
            right: 10,
            flexDirection: 'column',
            alignItems: 'center',
          }}>
          <Image
            source={require('../assets/img/game/Vector3.png')}
            style={{}}
          />
        </View>

        <View
          style={{
            position: 'absolute',
            bottom: 180,
            left: 10,
            flexDirection: 'column',
            alignItems: 'center',
          }}>
          {!isCollected1 && (<SomeReactSvg />)}
          <Image
            source={require('../assets/img/game/Vector1.png')}
            style={{marginTop: 4}}
          />
        </View>

        <View
          style={{
            position: 'absolute',
            bottom: 280,
            right: 60,
            flexDirection: 'column',
            alignItems: 'center',
          }}>
          <SomeReactSvg />
          <Image
            source={require('../assets/img/game/Vector4.png')}
            style={{marginTop: 4}}
          />
        </View>

        <View
          style={{
            position: 'absolute',
            top: 400,
            left: 60,
            flexDirection: 'column',
            alignItems: 'center',
          }}>
          <SomeReactSvg />
          <Image
            source={require('../assets/img/game/Vector6.png')}
            style={{marginTop: 4}}
          />
        </View>

        <View
          style={{
            position: 'absolute',
            top: 320,
            right: 0,
            flexDirection: 'column',
            alignItems: 'center',
          }}>
          <SomeReactSvg />
          <Image
            source={require('../assets/img/game/Vector1.png')}
            style={{marginTop: 4}}
          />
        </View>

        <PanGestureHandler onGestureEvent={onGestureEvent}>
          <Animated.View
            ref={svgRef} // Привязываем ссылку
            style={{
              position: 'absolute',
              bottom: 170,
              right: 10,
              transform: [{translateX: moveAnim}, {translateY: translateY}],
            }}>
            <MainWhiteReactSvg />
          </Animated.View>
        </PanGestureHandler>
      </View>
    );
};

export default GameProccesScreen;
