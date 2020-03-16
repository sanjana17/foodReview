import {combineReducers} from 'redux';
import {foodReviewReducer} from './foodReview/reducer';

const rootReducer = combineReducers({foodReviewReducer,});

export default rootReducer;