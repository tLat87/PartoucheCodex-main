import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import { persistConfig } from './persistConfig';
import { combineReducers } from 'redux';
import quotesReducer from './slices/savedQuotes';
import settingsReducer from './slices/settingsSlice';
import scoreReducer from './slices/scoreSlice';
import upgradeReducer from './slices/upgradeSlice';

const rootReducer = combineReducers({
  quotes: quotesReducer,
  settings: settingsReducer,

  score: scoreReducer,
  upgrades: upgradeReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
