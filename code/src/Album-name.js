import React from 'react';
import data from './data.json';

const albumName = data.albums.items[0].name;
const AlbumName = (props) => {
    return (
        <h2 className="album-title">
            {props.name}
        </h2>
    )
}

export default AlbumName;
