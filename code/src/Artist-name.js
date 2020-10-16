import React from 'react';
import data from './data.json';

// const artistName = data.albums.items[0].artists[0];

// const mappedArtistsArray = albumsArray.map((album) => {
//     const artistsArray = album.artists;
//     return artistsArray
// })


const ArtistName = (props) => {
        return (
            props.artistsArray.map((artist, i) => {
                return ( <a key={artist.id} href={artist.external_urls.spotify}>
                    <p className="artist-name">
                        {i > 0 && i < 2 ?  artist.name + ', ' : artist.name}
                    </p>
                </a>
           
            ) 
                    
        }) 
        )
    }
        


export default ArtistName;
