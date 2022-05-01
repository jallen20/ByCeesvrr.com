import React from 'react';
import {PhotoWrapperWrapper} from "./PhotoWrapper.styles";
import {Photo} from "../../store/main";
import {getPhotoSrc} from "../../config";
import LazyPhoto from "../lazy-photo/LazyPhoto";
import {useWindowDimensions} from "../../hooks";
import {HEADER_HEIGHT} from "../../constants";

const PhotoWrapper = (props: { photos: Photo[] }) => {
    const {photos} = props;
    const {width, height} = useWindowDimensions();

    return (
        <PhotoWrapperWrapper style={{ width: width - 2, height: height - HEADER_HEIGHT }}>
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
