import React, {useEffect} from 'react';
import {_init} from "../../store/main";
import { WorkWrapper } from './Work.styles';
import PhotoWrapper from "../../components/PhotoWrapper";
import {useDispatch, useSelector} from "react-redux";
import {getPhotos} from "../../ducks/selectors";
import {setPhotos} from "../../ducks/actions";

const Work = () => {
    const dispatch = useDispatch();
    const workPhotos = useSelector(getPhotos);
    
    useEffect(() => {
        if (!workPhotos.length) {
            (async () => {
                let [token, photos] = await _init();
                dispatch(setPhotos(photos));
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
