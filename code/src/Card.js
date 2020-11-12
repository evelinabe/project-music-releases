import React from 'react'
import CoverImage from './Cover-image'
import AlbumName from './Album-name'
import ArtistName from './Artist-name'
import data from './data.json'
import AlbumCoverOverlay from './Album-cover-overlay'

const albumsArray = data.albums.items;

const Card = () => {
    return (
        <>
            {albumsArray.map((album) => {
                return (
                    <div className="card" key={album.id}>
                        <CoverImage
                            src={album.images[1].url}
                        />
                        <AlbumName
                            name={album.name}
                            url={album.external_urls.spotify}
                        />
                        <ArtistName
                            artistsArray={album.artists}
                        />
                    </div>
                )
            })}
        </>
    );
}

export default Card