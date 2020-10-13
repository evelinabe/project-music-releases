import React from 'react';
import Play from '../../public/icons/play.svg'

//const play = require('../../public/icons/play.svg')

const AlbumCoverOverlay = () => {
    return (
        <div className="album-cover-overlay">
            <img src={Play} alt="play-icon"/>
        </div>
    )
}

export default AlbumCoverOverlay;