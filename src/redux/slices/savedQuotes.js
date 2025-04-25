import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    savedQuotes: []
};

const quotesSlice = createSlice({
    name: 'quotes',
    initialState,
    reducers: {
        toggleQuote: (state, action) => {
            const index = state.savedQuotes.findIndex(q => q.quote === action.payload.quote);
            if (index === -1) {
                state.savedQuotes.push(action.payload); // Добавить, если нет в сохраненных
            } else {
                state.savedQuotes.splice(index, 1); // Удалить, если уже есть
            }
        },
        // Добавление действия для очистки сохраненных цитат
        clearQuotes: (state) => {
            state.savedQuotes = []; // Сбросить массив savedQuotes
        }
    }
});

export const { toggleQuote, clearQuotes } = quotesSlice.actions;
export default quotesSlice.reducer;
