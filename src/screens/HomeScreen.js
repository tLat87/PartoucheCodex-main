// import { View, Text, Vibration, Image, TouchableOpacity } from 'react-native';
// import MusicSvg from '../assets/svg/MusicSvg';
// import VibroSvg from '../assets/svg/VibroSvg';
// import CustomBtn from '../component/CustomBtn';
// import OkSvg from '../assets/svg/OkSvg';
// import BanSvg from '../assets/svg/BanSvg';
// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import {setMusic, setVibration} from "../redux/slices/settingsSlice";
//
// const HomeScreen = () => {
//   const dispatch = useDispatch();
//   const isMusicOn = useSelector(state => state.settings.isMusicOn);
//   const isVibrationOn = useSelector(state => state.settings.isVibrationOn);
//
//   return (
//       <View style={{ backgroundColor: '#000', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <>
//           <View style={{
//             backgroundColor: '#1F1F1F',
//             width: '100%',
//             position: 'absolute',
//             height: 160,
//             borderRadius: 990 / 2,
//             top: -80,
//             transform: [{ scaleY: 0.4 }],
//           }} />
//           <Image source={require('../assets/img/Group48097023.png')} style={{ width: 80, position: 'absolute', top: 0 }} resizeMode={'contain'} />
//         </>
//
//         <View style={{ paddingHorizontal: 24, flexDirection: 'row', marginBottom: 22, justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
//           <View style={{ flexDirection: 'row', gap: 8, alignItems: 'center' }}>
//             <MusicSvg />
//             <Text style={{ color: '#fff', fontSize: 36, fontFamily: 'Staatliches-Regular' }}>
//               music
//             </Text>
//           </View>
//           <TouchableOpacity onPress={() => dispatch(setMusic(!isMusicOn))} style={{ flexDirection: 'row', borderRadius: 8, justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#fff' }}>
//             <Text style={{ color: '#666666', fontSize: 16, marginHorizontal: 6 }}>
//               {isMusicOn ? 'On' : 'Off'}
//             </Text>
//             <View style={{ backgroundColor: isMusicOn ? '#83D79C' : '#BC3D32', borderRadius: 8, padding: 8, justifyContent: 'center', alignItems: 'center' }}>
//               {isMusicOn ? <OkSvg /> : <BanSvg />}
//             </View>
//           </TouchableOpacity>
//         </View>
//
//         <View style={{ paddingHorizontal: 24, flexDirection: 'row', marginBottom: 50, justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
//           <View style={{ flexDirection: 'row', gap: 8, alignItems: 'center' }}>
//             <VibroSvg />
//             <Text style={{ color: '#fff', fontSize: 36, fontFamily: 'Staatliches-Regular' }}>
//               vibration
//             </Text>
//           </View>
//           <TouchableOpacity onPress={() => dispatch(setVibration(!isVibrationOn))} style={{ flexDirection: 'row', borderRadius: 8, justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#fff' }}>
//             <Text style={{ color: '#666666', fontSize: 16, marginHorizontal: 6 }}>
//               {isVibrationOn ? 'On' : 'Off'}
//             </Text>
//             <View style={{ backgroundColor: isVibrationOn ? '#83D79C' : '#BC3D32', borderRadius: 8, padding: 8, justifyContent: 'center', alignItems: 'center' }}>
//               {isVibrationOn ? <OkSvg /> : <BanSvg />}
//             </View>
//           </TouchableOpacity>
//         </View>
//
//         <CustomBtn onPress={() => {}} title='Reset progress' stylesAdd={{ width: '90%' }} />
//       </View>
//   );
// };
//
// export default HomeScreen;

// HomeScreen.js
import React from 'react';
import { View, Text, TouchableOpacity, Alert, Image } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { setMusic, setVibration } from "../redux/slices/settingsSlice";
import { resetScore } from "../redux/slices/scoreSlice"; // Импортируем сброс скора
import MusicSvg from '../assets/svg/MusicSvg';
import VibroSvg from '../assets/svg/VibroSvg';
import CustomBtn from '../component/CustomBtn';
import OkSvg from '../assets/svg/OkSvg';
import BanSvg from '../assets/svg/BanSvg';
import {clearQuotes} from "../redux/slices/savedQuotes";
import {resetSettings} from "../redux/slices/upgradeSlice";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const isMusicOn = useSelector(state => state.settings.isMusicOn);
  const isVibrationOn = useSelector(state => state.settings.isVibrationOn);

  const handleResetProgress = () => {
    Alert.alert(
        'Confirm Reset',
        'Are you sure you want to reset all progress? This cannot be undone.',
        [
          {
            text: 'Cancel',
            style: 'cancel',
          },
          {
            text: 'Reset',
            onPress: () => {
              dispatch(resetSettings());
              dispatch(resetScore());
              dispatch(clearQuotes());
            },
            style: 'destructive',
          },
        ],
        { cancelable: true }
    );
  };

  return (
      <View style={{ backgroundColor: '#000', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
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
          <Image source={require('../assets/img/Group48097023.png')} style={{ width: 80, position: 'absolute', top: 0 }} resizeMode={'contain'} />
        </>

        <View style={{ paddingHorizontal: 24, flexDirection: 'row', marginBottom: 22, justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
          <View style={{ flexDirection: 'row', gap: 8, alignItems: 'center' }}>
            <MusicSvg />
            <Text style={{ color: '#fff', fontSize: 36, fontFamily: 'Staatliches-Regular' }}>
              music
            </Text>
          </View>
          <TouchableOpacity onPress={() => dispatch(setMusic(!isMusicOn))} style={{ flexDirection: 'row', borderRadius: 8, justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#fff' }}>
            <Text style={{ color: '#666666', fontSize: 16, marginHorizontal: 6 }}>
              {isMusicOn ? 'On' : 'Off'}
            </Text>
            <View style={{ backgroundColor: isMusicOn ? '#83D79C' : '#BC3D32', borderRadius: 8, padding: 8, justifyContent: 'center', alignItems: 'center' }}>
              {isMusicOn ? <OkSvg /> : <BanSvg />}
            </View>
          </TouchableOpacity>
        </View>

        <View style={{ paddingHorizontal: 24, flexDirection: 'row', marginBottom: 50, justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
          <View style={{ flexDirection: 'row', gap: 8, alignItems: 'center' }}>
            <VibroSvg />
            <Text style={{ color: '#fff', fontSize: 36, fontFamily: 'Staatliches-Regular' }}>
              vibration
            </Text>
          </View>
          <TouchableOpacity onPress={() => dispatch(setVibration(!isVibrationOn))} style={{ flexDirection: 'row', borderRadius: 8, justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#fff' }}>
            <Text style={{ color: '#666666', fontSize: 16, marginHorizontal: 6 }}>
              {isVibrationOn ? 'On' : 'Off'}
            </Text>
            <View style={{ backgroundColor: isVibrationOn ? '#83D79C' : '#BC3D32', borderRadius: 8, padding: 8, justifyContent: 'center', alignItems: 'center' }}>
              {isVibrationOn ? <OkSvg /> : <BanSvg />}
            </View>
          </TouchableOpacity>
        </View>

        <CustomBtn onPress={handleResetProgress} title='Reset progress' stylesAdd={{ width: '90%' }} />
      </View>
  );
};

export default HomeScreen;
