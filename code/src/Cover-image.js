import React from 'react';
import data from './data.json';


const CoverImage = (props) => {
    return (

        <img src= {props.src} className="album-cover"/>
    )
}

export default CoverImage;
