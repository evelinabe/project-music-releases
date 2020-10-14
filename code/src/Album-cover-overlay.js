import React from 'react';
import Play from './icons/play.svg';
import Heart from './icons/heart.svg';
import Dots from './icons/dots.svg';

const AlbumCoverOverlay = () => {

    const showIcons = e =>{
        e.target.style.background='red';
     }

    return (
        <div  onMouseOver ={showIcons} className="album-cover-overlay">
           
            <img src={Heart} alt="heart-icon" className="heart-icon icon" />
            <img src={Play} alt="play-icon" className="play-icon icon"/>
            <img src= {Dots} alt="dots-icon" className="dots-icon icon" />
        </div>
    )
}




export default AlbumCoverOverlay;