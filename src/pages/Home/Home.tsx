import React, {useEffect, useState} from 'react';
import {_init, Photo} from "../../store/main";
import {HomeWrapper} from './Home.styles';
import PhotoWrapper from "../../components/PhotoWrapper";
import {HOME_PHOTO} from "../../constants";

const Home = () => {
    const [homePhotos, setHomePhotos] = useState([] as Photo[]);
    
    useEffect(() => {
        if (!homePhotos.length) {
            (async () => {
                let [token, photos] = await _init();
                setHomePhotos(photos.filter(isHomePhoto));
            })();
        }
    }, []);
    
    const isHomePhoto = (photo: Photo) => photo.fileName.indexOf(HOME_PHOTO) !== -1;
    
    return (<HomeWrapper>
        <PhotoWrapper  photos={homePhotos} />
    </HomeWrapper>)
};
export default Home;
