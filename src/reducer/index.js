import { ABOUT_MENU_CLICK } from '../action';
import { SET_SLIDE_NUMBER } from '../action';
import { combineReducers } from 'redux';

let AboutMenuClickInit = {
    select: 'profile'
};
const AboutMenuClick = (state = AboutMenuClickInit, action ) => {
    switch(action.type) {
        case ABOUT_MENU_CLICK:
            return {
                ...state, select: action.payload
            }
        default:
            return state;
    }
}

let SetSlideNumberInit = {
    number: 0
}

const SetSlideNumber = (state = SetSlideNumberInit, action) => {
    switch(action.type) {
        case SET_SLIDE_NUMBER:
            return {
                ...state, number: action.payload
            }
        default:
            return state;
    }
}

const ReducersApp = combineReducers({
    AboutMenuClick, SetSlideNumber
});

export default ReducersApp;