import React from 'react';
import data from './data.json';

const albumName = data.albums.items[0].name;
const AlbumName = (props) => {
    return (
        <a href={props.url} >
            <h2 className="album-title">
                {props.name}
            </h2>
        </a>
    )
}

export default AlbumName;
