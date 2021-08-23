import { combineReducers } from 'redux'
import { LoginReducer } from '../Screen/Login/redux/reducer';
import { RegisterReducer } from '../Screen/Register/redux/reducer'
import { GLobalReducer } from './GlobalReducer';

export const allReducer = combineReducers({
    login: LoginReducer,
    register: RegisterReducer,
    home: homeReducer,

});