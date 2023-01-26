import { ABOUT_MENU_CLICK, SET_SLIDE_NUMBER, SET_SLIDE_CHECK } from "../action";
import { combineReducers } from "redux";

let AboutMenuClickInit = {
  select: "profile",
};
const AboutMenuClick = (state = AboutMenuClickInit, action) => {
  switch (action.type) {
    case ABOUT_MENU_CLICK:
      return {
        ...state,
        select: action.payload,
      };
    default:
      return state;
  }
};

let SetSlideNumberInit = {
  number: 0,
};
const SetSlideNumber = (state = SetSlideNumberInit, action) => {
  switch (action.type) {
    case SET_SLIDE_NUMBER:
      return {
        ...state,
        number: action.payload,
      };
    default:
      return state;
  }
};

let SetSlideCheckInit = {
  check: false,
};
const SetSlideCheck = (state = SetSlideCheckInit, action) => {
  switch (action.type) {
    case SET_SLIDE_CHECK:
      return {
        ...state,
        check: action.payload,
      };
    default:
      return state;
  }
};

const ReducersApp = combineReducers({
  AboutMenuClick,
  SetSlideNumber,
  SetSlideCheck,
});

export default ReducersApp;
