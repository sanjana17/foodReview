import {handleActions} from 'redux-actions';
import * as actions from './actions';

export const INIT ={
    isLoading: false,
    restaurants:[]
}

export const foodReviewReducer = handleActions({
    [actions.fetchRestaurantDetails]: state =>({
        ...state,
        isLoading: true,
    }),
    [actions.setRestaurantDetails]: (state,{payload}) =>({
        ...state,
        isLoading: false,
        restaurants: payload
    })
}, INIT);