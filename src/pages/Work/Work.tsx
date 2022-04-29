import React, {useEffect, useState} from 'react';
import {_init, Photo} from "../../store/main";
import {useWindowDimensions} from "../../hooks";
import { WorkWrapper } from './Work.styles';
import PhotoWrapper from "../../components/PhotoWrapper";

const Work = () => {
    const [workPhotos, setWorkPhotos] = useState([] as Photo[]);
    const { width, height } = useWindowDimensions();
    
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
            <PhotoWrapper photos={workPhotos} style={{ width: width - 2 }} />
        </WorkWrapper>
    )
};
export default Work;
