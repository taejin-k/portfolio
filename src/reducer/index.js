import { ABOUT_MENU_CLICK } from '../action';
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

const ReducersApp = combineReducers({
    AboutMenuClick
});

export default ReducersApp;