import React from 'react';
import data from './data.json';

const albumName = data.albums.items[0].name;
const AlbumName = () => {
    return (
        <h2 className="album-title">
            {albumName}
        </h2>
    )
}

export default AlbumName;

console.log (albumName); 