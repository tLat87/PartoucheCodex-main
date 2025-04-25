// settingsSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isMusicOn: true,
    isVibrationOn: true,
    // другие состояния...
};

const settingsSlice = createSlice({
    name: 'settings',
    initialState,
    reducers: {
        setMusic: (state, action) => {
            state.isMusicOn = action.payload;
        },
        setVibration: (state, action) => {
            state.isVibrationOn = action.payload;
        },
        resetSettings: () => initialState, // Действие для сброса всех настроек
    },
});

export const { setMusic, setVibration, resetSettings } = settingsSlice.actions;

export default settingsSlice.reducer;
