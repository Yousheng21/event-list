import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { api } from "../services/api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistReducer, persistStore } from "redux-persist";

const reducers = combineReducers({
  [api.reducerPath]: api.reducer,
})

const persistConfig = {
  key: 'root',
  version: 1,
  storage: AsyncStorage,
}

const persistedReducer = persistReducer(persistConfig, reducers)

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(api.middleware),
  devTools: true,
});

export let persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;