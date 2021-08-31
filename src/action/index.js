export const ABOUT_MENU_CLICK = 'ABOUT_MENU_CLICK';
export const SET_SLIDE_NUMBER = 'SET_SLIDE_NUMBER';

export function AboutMenuClick(select) {
    return {
        type: ABOUT_MENU_CLICK,
        payload: select
    }
}

export function SetSlideNumber(number) {
    return {
        type: SET_SLIDE_NUMBER,
        payload: number
    }
}