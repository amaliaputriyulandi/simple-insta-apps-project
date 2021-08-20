import { put, takeLatest } from "@redux-saga/core/effects";
import axios from "axios";
import { Alert } from "react-native";
import { navigate } from "../../../Function/navigate";
import { setLoading } from "../../../Store/GlobalAction";
import { setDataUser, setTokenLogin } from "./action";

function* postLoginSaga(action){
    try {
        yield put(setLoading(true));
        const requestBody = {
            ...action.payload,
        };
        console.log('before fetch')
        const response = yield axios.post(
            'https://simple-insta-app.herokuapp.com/api/login',
            requestBody,
            {validateStatus: status => status < 500}
        );

        console.log('after fetch')
        if (response.status === 200) {
            //yield put(setDataUser(response.data.data));
            yield put(setTokenLogin(response.data.token));
            yield navigate('Home');
        } else{
            Alert.alert(response.data.message);
        }

        if (response.status === 404) {
            Alert.alert('Missing URL, Please check URL request')
        }
    } catch (error) {
        console.log(error);
    } finally{
        yield put(setLoading(false));
    }

}

export function* SagaLogin(){
    yield takeLatest('USER_LOGIN', postLoginSaga);
};