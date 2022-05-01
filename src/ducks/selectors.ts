import { RootState } from '../store/configureStore';
import {Photo} from "./initialState";
import {HOME_PHOTO} from "../constants";

export const getPhotos = (state: RootState) => state.portfolio.photos;

export const getHomePhotos = (state: RootState) => state.portfolio.photos.filter(isHomePhoto);

export const getIsNavOpen = (state: RootState) => state.portfolio.isNavOpen;

const isHomePhoto = (photo: Photo) => photo.fileName.indexOf(HOME_PHOTO) !== -1;
