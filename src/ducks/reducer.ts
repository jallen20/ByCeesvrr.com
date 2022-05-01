import * as types from './actionTypes';
import { portfolioInitialState } from './initialState';


export const portfolioReducer = (state = portfolioInitialState, action: any) => {
  const { type, payload } = action;
  switch (type) {
    case types.SET_PHOTOS: {
      return {
        ...state,
        photos: payload,
      };
    }
    case types.TOGGLE_NAV: {
      return {
        ...state,
        isNavOpen: payload
      }
    }
    default: {
      return state;
    }
  }
};
