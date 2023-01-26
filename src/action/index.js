export const ABOUT_MENU_CLICK = "ABOUT_MENU_CLICK";
export const SET_SLIDE_NUMBER = "SET_SLIDE_NUMBER";
export const SET_SLIDE_CHECK = "SET_SLIDE_CHECK";

export function AboutMenuClick(select) {
  return {
    type: ABOUT_MENU_CLICK,
    payload: select,
  };
}

export function SetSlideNumber(number) {
  return {
    type: SET_SLIDE_NUMBER,
    payload: number,
  };
}

export function SetSlideCheck(check) {
  return {
    type: SET_SLIDE_CHECK,
    payload: check,
  };
}
