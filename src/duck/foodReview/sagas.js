import {all,takeEvery, call, put} from 'redux-saga/effects';
import {fetchRestaurantDetails, setRestaurantDetails} from './actions';
import FetchApi from './../../fetch';

export function* fetchRestaurantDetailsWorker(){
    const data = yield call(FetchApi.get,'https://developers.zomato.com/api/v2.1/establishments?city_id=280');
    yield put(setRestaurantDetails(data));
}



export function* foodReviewSaga(){
    yield all([
        takeEvery(fetchRestaurantDetails, fetchRestaurantDetailsWorker),
    ])
}