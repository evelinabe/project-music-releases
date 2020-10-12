import React from 'react';
import data from './data.json';

const artistName = data.albums.items[0].artists[0].name;
const ArtistName = () => {
    return (
        <h2 className="artist-name">
            {artistName}
        </h2>
    )
}

export default ArtistName;

console.log (artistName); 