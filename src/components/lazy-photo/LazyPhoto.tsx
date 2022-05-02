import React, {useState} from 'react';
import { useInView } from "react-intersection-observer";
import {ImageWrapper} from "./LazyPhoto.styles";

const LazyImage = (props: { src: string, alt: string }) => {
    const {src, alt} = props;
    const { ref, inView } = useInView({
        threshold: 0
    });
    
    const [opacity, setOpacity] = useState(0);
    
    const fade = (_opacity: number) => setTimeout(() => setOpacity(_opacity), 5);

    if (inView) fade(1);
    else fade(0);

    return (
        <ImageWrapper
            ref={ref}
            src={src}
            alt={alt}
            key={`${src}_key`}
            style={{ opacity }}
            onLoad={() => fade(1)}
        />
    );
};

export default LazyImage;