import React, {useEffect} from 'react';
import {_init} from "../../store/main";
import {HomeWrapper} from './Home.styles';
import PhotoWrapper from "../../components/PhotoWrapper";
import {useDispatch, useSelector} from "react-redux";
import {setPhotos} from "../../ducks/actions";
import {getHomePhotos} from "../../ducks/selectors";
import {SirvSearchQuery} from "../../config";

const Home = () => {
    const dispatch = useDispatch();
    const homePhotos = useSelector(getHomePhotos);
    
    useEffect(() => {
        if (+homePhotos.length === 0) {
            (async () => {
                let [token, photos] = await _init(SirvSearchQuery);
                dispatch(setPhotos(photos));
            })();
        }
    }, []);
    
    return (
        <HomeWrapper>
        <PhotoWrapper  photos={homePhotos} />
    </HomeWrapper>)
};
export default Home;
