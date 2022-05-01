import React, {useEffect} from 'react';
import {_init, Photo} from "../../store/main";
import {HomeWrapper} from './Home.styles';
import PhotoWrapper from "../../components/PhotoWrapper";
import {HOME_PHOTO} from "../../constants";
import {useDispatch, useSelector} from "react-redux";
import {setPhotos} from "../../ducks/actions";
import {getHomePhotos} from "../../ducks/selectors";

const Home = () => {
    const dispatch = useDispatch();
    const homePhotos = useSelector(getHomePhotos);
    
    useEffect(() => {
        if (!homePhotos.length) {
            (async () => {
                let [token, photos] = await _init();
                dispatch(setPhotos(photos));
            })();
        }
    }, []);
    
    return (<HomeWrapper>
        <PhotoWrapper  photos={homePhotos} />
    </HomeWrapper>)
};
export default Home;
