import { Text, TouchableOpacity, Vibration } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';

const CustomBtn = ({ onPress, title, stylesAdd = {} }) => {
    const isVibrationOn = useSelector(state => state.settings.isVibrationOn);

    const handlePress = () => {
        if (isVibrationOn) {
            Vibration.vibrate(50);
        }
        onPress();
    };

    return (
        <TouchableOpacity
            onPress={handlePress}
            style={[{ backgroundColor: '#BC3D32', padding: 16, borderRadius: 10, width: '60%', alignItems: 'center' }, stylesAdd]}
        >
            <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 20 }}>
                {title}
            </Text>
        </TouchableOpacity>
    );
};

export default CustomBtn;
