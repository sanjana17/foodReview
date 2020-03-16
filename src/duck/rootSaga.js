import {fork} from 'redux-saga/effects';
import {foodReviewSaga} from './foodReview/sagas';

export default function* rootSaga(){
    yield fork(foodReviewSaga);
}