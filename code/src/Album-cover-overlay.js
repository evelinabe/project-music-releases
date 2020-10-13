import React from 'react';
import play from '../../public/icons/play.svg'

const AlbumCoverOverlay = () => {
    return (
        <div className="album-cover-overlay">
            <img src={play} alt="play-icon"/>
        </div>
    )
}

export default AlbumCoverOverlay;