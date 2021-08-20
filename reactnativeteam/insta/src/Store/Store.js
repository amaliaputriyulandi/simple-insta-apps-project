import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import storage from '@react-native-async-storage/async-storage';
import createSaga from 'redux-saga';
import {persistReducer, persistStore} from 'redux-persist';
import {allReducer} from './allReducer';
import {sagaWatcher} from './sagaWatcher';

const persistConfig = {
  key: 'insta',
  storage,
};

const SagaMiddleWare = createSaga();

const persistedReducer = persistReducer(configPersist, allReducer);

export const Store = createStore(
  persistedReducer,
  applyMiddleware(logger, SagaMiddleWare),
);

export const PersistStore = persistStore(Store);

SagaMiddleWare.run(sagaWatcher);