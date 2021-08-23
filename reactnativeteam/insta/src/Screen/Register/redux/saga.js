import axios from 'axios';
import { Alert } from 'react-native';
import {takeEvery, takeLatest, put} from 'redux-saga/effects';
import {setLoading} from '../../../Store/GlobalAction'
import {navigate} from '../../../Function/navigate'
import {setTokenRegister} from './action'

function* postRegisterSaga(action){
    try {
        yield put(setLoading(true));
        const requestBody = {
            ...action.payload,
        };
        const response = yield axios.post(
            'https://simple-insta-app.herokuapp.com/api/signup',
            requestBody,
            {validateStatus: status => status < 500}//kondisi u/ eror diatas 200 agar tetap dieksekusi, 
        );

        if (response.status === 200) {
            yield put(setTokenRegister(response.data.token));
            yield navigate('Login');
        }else{
            Alert.alert(response.data.message);//munculin error
        }

        if (response.status === 404) {
            Alert.alert('Missing URL, Please check URL request.')
        }
    } catch (error) {
        console.log(error)
    }finally{
        yield put(setLoading(false));
    }
}

export function* SagaRegister(){
    yield takeLatest('REGISTER_USER', postRegisterSaga);
}// Untuk saga watcher