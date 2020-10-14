import AlbumCoverOverlay from 'Album-cover-overlay';
import React from 'react';
import data from './data.json';


const CoverImage = props => {

    
    return (

        <img  src= {props.src} className="album-cover"/>
    )
}

export default CoverImage;





//     function changeBackground(e) {
//       e.target.style.background = 'red';
//     }
  
//     return (
//       <div className="App">
//         <button onMouseOver={changeBackground}>Hover over me!</button>
//       </div>
//     );
//   }