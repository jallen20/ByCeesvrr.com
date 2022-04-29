import {getHttpGetSetting, getHttpPostSetting, SirvClientConfig} from "../config";
import {PORTFOLIO_DIRNAME} from "../constants";
import {Photo} from "../store/main";

const SIRV_API_TOKEN_URL = 'https://api.sirv.com/v2/token';
const SIRV_LIST_DIR_CONTENTS_URL = `https://api.sirv.com/v2/files/readdir?dirname=%2F${PORTFOLIO_DIRNAME}`

export const fetchSirvToken = async () => {
    try {
        let req = await fetch(SIRV_API_TOKEN_URL, getHttpPostSetting(SirvClientConfig)) as any;
        let res = await req.json();
        return {token: res.token, expiresIn: res.expiresIn};
    } catch(err) {
        console.error(err);
    }
}

export const fetchPhotos = async (token: any) => {
    try {
        let req = await fetch(SIRV_LIST_DIR_CONTENTS_URL, getHttpGetSetting(token));
        let res = await req.json();
        if (!res?.contents) throw new Error(`Could not fetch response from ${SIRV_LIST_DIR_CONTENTS_URL}`);
        let data: Photo[] = res.contents.map((img: any) => ({fileName: img.filename}));
        return data;
    } catch(err) {
        console.error(err);
    }
}