import * as types from './actionTypes';

export const setPhotos = (payload: []) => ({
  type: types.SET_PHOTOS,
  payload,
});

export const toggleNav = (payload: boolean) => ({ 
  type: types.TOGGLE_NAV,
  payload
});
