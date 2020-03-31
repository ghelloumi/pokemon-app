import React from 'react';
import {IMAGES} from "../../utils/contants";

const Image = ({src, alt, onClick, opacity}) => {
    const onError = (e) => {
        e.target.src = IMAGES.imageNotFound
    }

    return (
        <img src={src} alt={alt} onError={onError} onClick={onClick} style={opacity ? {opacity} : {}}/>
    );
}

export default Image;
