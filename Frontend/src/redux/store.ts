import { configureStore } from '@reduxjs/toolkit';
import priceReducer, { PriceState } from './priceSlice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import showModalReducer from './showModal';
import symbolReducer from './symbolSlice';

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  prices: priceReducer,
  showModal: showModalReducer,
  symbol: symbolReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
});

const persistor = persistStore(store);

export type RootState = ReturnType<typeof rootReducer>;

export { store, persistor };
