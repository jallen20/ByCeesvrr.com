import {fetchPhotos, fetchPhotosBySearch, fetchSirvToken} from "../service/ImageService";
import {SirvQuery} from "../config";

export type Photo = {
    fileName: string
};

export const _init = async (query: SirvQuery) => {
    const token: any = await fetchSirvToken();
    const photos: Photo[] = await fetchPhotos(token.token) as Photo[];
    return [token, photos];
}
