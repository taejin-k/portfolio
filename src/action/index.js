export const ABOUT_MENU_CLICK = 'ABOUT_MENU_CLICK';

export function AboutMenuClick(select) {
    return {
        type: ABOUT_MENU_CLICK,
        payload: select
    }
}