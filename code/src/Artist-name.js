import React from 'react';
import data from './data.json';

// const artistName = data.albums.items[0].artists[0];

// const albumsArray = data.albums.items;

// const mappedArtistsArray = albumsArray.map((album) => {
//     const artistsArray = album.artists;
//     return artistsArray
// })


const ArtistName = (props) => {
        return (
            <>
                <a href={props.url}>
                    <h2 className="artist-name">
                        {props.name}
                    </h2>
                </a>
            </>
        )
}
        


export default ArtistName;
