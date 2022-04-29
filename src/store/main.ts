import {fetchPhotos, fetchSirvToken} from "../service/ImageService";

export type Photo = {
    fileName: string
};

export const _init = async () => {
    const token: any = await fetchSirvToken();
    const photos: Photo[] = await fetchPhotos(token.token) as Photo[];
    return [token, photos];
}
