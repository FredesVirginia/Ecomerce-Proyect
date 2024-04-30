import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import reducer from "../Redux/reducer" // tu combinación de reducers
import {thunk } from 'redux-thunk'; // o cualquier otro middleware que estés usando




const persistConfig = {
  key: 'root',
  storage,
  // puedes agregar configuraciones adicionales aquí
};

const persistedReducer = persistReducer(persistConfig, reducer);

const store = createStore(
  persistedReducer,
  applyMiddleware(thunk) // puedes agregar otros middleware aquí
);

const persistor = persistStore(store);


export  { store, persistor };

