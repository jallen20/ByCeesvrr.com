import React, {useEffect, useState} from 'react';
import {_init, Photo} from "../../store/main";
import { WorkWrapper } from './Work.styles';
import PhotoWrapper from "../../components/PhotoWrapper";

const Work = () => {
    const [workPhotos, setWorkPhotos] = useState([] as Photo[]);
    
    useEffect(() => {
        if (!workPhotos.length) {
            (async () => {
                let [token, photos] = await _init();
                setWorkPhotos(photos);
            })();
        }
    });
    
    return (
        <WorkWrapper>
            <PhotoWrapper photos={workPhotos} />
        </WorkWrapper>
    )
};
export default Work;
