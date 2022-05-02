import {
    getHttpGetSetting,
    getHttpPostSetting,
    getHttpPostSirvSearchSetting,
    SirvClientConfig,
    SirvQuery
} from "../config";
import {PORTFOLIO_DIRNAME} from "../constants";
import {Photo} from "../store/main";

const SIRV_API_TOKEN_URL = 'https://api.sirv.com/v2/token';
const SIRV_LIST_DIR_CONTENTS_URL = `https://api.sirv.com/v2/files/readdir?dirname=%2F${PORTFOLIO_DIRNAME}&continuation=`
const SIRV_SEARCH_API_URL = 'https://api.sirv.com/v2/files/search';

export const fetchSirvToken = async () => {
    try {
        let req = await fetch(SIRV_API_TOKEN_URL, getHttpPostSetting(SirvClientConfig)) as any;
        let res = await req.json();
        return {token: res.token, expiresIn: res.expiresIn};
    } catch(err) {
        console.error(err);
    }
}

// TODO Implement pagination
export const fetchPhotos = async (token: any) => {
    try {
        let data = [];
        let req = await fetch(SIRV_LIST_DIR_CONTENTS_URL, getHttpGetSetting(token));
        let res = await req.json();
        if (!res?.contents) throw new Error(`Could not fetch response from ${SIRV_LIST_DIR_CONTENTS_URL}`);
        if (res.continuation) {
            const url = `${SIRV_LIST_DIR_CONTENTS_URL}${res.continuation}`;
            const continuedReq = await fetch(url, getHttpGetSetting(token));
            const resContinued = await continuedReq.json();
            console.log(resContinued);
            if (resContinued.contents) data.push(...resContinued.contents);
        }
        data.push(...res.contents);
        return data.map((img: any) => ({fileName: img.filename}));
    } catch(err) {
        console.error(err);
    }
}

export const fetchPhotosBySearch = async (token: any, body: SirvQuery) => {
    try {
        const postSettings = getHttpPostSetting(token);
        let req = await fetch(SIRV_SEARCH_API_URL, getHttpPostSirvSearchSetting(token, body));
        let res = await req.json();
        console.log(res);
        if (!res?.contents) throw new Error(`Could not fetch response from ${SIRV_SEARCH_API_URL}`);
        let data: Photo[] = res.contents.map((img: any) => ({fileName: img.filename}));
        return data;
    } catch(err) {
        console.error(err);
    }
}