import React from 'react';

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
