import React, {useEffect, useState} from 'react';
import {_init, Photo} from "../../store/main";
import {HomeWrapper} from './Home.styles';
import PhotoWrapper from "../../components/PhotoWrapper";
import { useWindowDimensions } from "../../hooks";

const Home = () => {
    const [homePhotos, setHomePhotos] = useState([] as Photo[]);
    const {width, height} = useWindowDimensions();
    
    useEffect(() => {
        if (!homePhotos.length) {
            (async () => {
                let [token, photos] = await _init();
                setHomePhotos(photos.filter(isHomePhoto));
            })();
        }
    }, []);
    
    const isHomePhoto = (photo: Photo) => photo.fileName.indexOf('Home_') !== -1;
    
    return (<HomeWrapper>
        <PhotoWrapper style={{ width: width - 2 }} photos={homePhotos}/>
    </HomeWrapper>)
};
export default Home;
