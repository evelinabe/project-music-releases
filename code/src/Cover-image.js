import React from 'react';
import data from './data.json';

const image = data.albums.items[0].images[1].url
const CoverImage = () => {
    return (
        <img src= {image}/>
    )
}

export default CoverImage;

console.log (image); 