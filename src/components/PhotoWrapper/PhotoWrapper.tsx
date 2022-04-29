import React from 'react';
import {PhotoWrapperWrapper} from "./PhotoWrapper.styles";
import {Photo} from "../../store/main";
import {getPhotoSrc} from "../../config";
import LazyPhoto from "../lazy-photo/LazyPhoto";

const PhotoWrapper = (props: { photos: Photo[], style?: any }) => {
    const {photos, style} = props;

    return (
        <PhotoWrapperWrapper style={style}>
            {photos.map((photo: Photo) =>
                <LazyPhoto
                    src={getPhotoSrc(photo.fileName)}
                    alt={photo.fileName}
                    key={photo.fileName}
                />
            )
            }
        </PhotoWrapperWrapper>
    );
};
export default PhotoWrapper;
