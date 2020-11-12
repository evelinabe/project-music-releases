import React from 'react'

import Play from './icons/play.svg'
import Heart from './icons/heart.svg'
import Dots from './icons/dots.svg'

const AlbumCoverOverlay = () => {

    return (
        <div className="album-cover-overlay">
                <img src={Heart} alt="heart-icon" className="heart-icon" />
                <img src={Play} alt="play-icon" className="play-icon"/>
                <img src= {Dots} alt="dots-icon" className="dots-icon" />    
        </div>
    )
}

export default AlbumCoverOverlay