import { all } from "redux-saga/effects";
import { SagaEditProfile } from "../Screen/Editprofile/redux/saga";
import { homeSaga } from "../Screen/Homepage/redux/saga";
import { SagaLogin } from "../Screen/Login/redux/saga";
import { rAllReviewSaga } from "../Screen/myReview/redux/saga";
import { myReviewSaga } from "../Screen/myReview/redux2/saga";
import { SagaRegister } from "../Screen/Register/redux/saga";

export function* SagaWatcher() {
    yield all([homeSaga(), SagaRegister(), SagaLogin(), rAllReviewSaga(), myReviewSaga(), SagaEditProfile()])
}