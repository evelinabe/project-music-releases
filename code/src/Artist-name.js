import React from 'react';
import data from './data.json';

const artistName = data.albums.items[0].artists[0].name;
console.log(data.albums.items)
const ArtistName = (props) => {
    return (
        <a href={props.url} >
            <h2 className="artist-name">
                {props.name}
            </h2>
        </a>
    )
}

export default ArtistName;

console.log(artistName); 