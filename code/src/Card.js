import React from 'react';
import CoverImage from './Cover-image'
import AlbumName from './Album-name'
import ArtistName from './Artist-name'
import data from './data.json';
import AlbumCoverOverlay from './Album-cover-overlay'

const albumsArray = data.albums.items;
console.log(albumsArray)

const Card = () => {
    return (
        <>
            {albumsArray.map((album) => {
                return (
                    <div className="card" key={album.id}>
                        <AlbumCoverOverlay key={album.artists.id}/>
                        <CoverImage
                            key={album.images[1].url}
                            src={album.images[1].url}
                        />
                        <AlbumName
                            key={album.name}
                            name={album.name}
                            url={album.external_urls.spotify}
                        />
                        <ArtistName
                            key={album.artists[0].name}
                            artistsArray={album.artists}
                        />
                    </div>
                )
            })}
        </>        
    );
}

export default Card;