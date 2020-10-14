import React from 'react';
import data from './data.json';

const artistName = data.albums.items[0].artists[0];


const ArtistName = (props) => {
    return (
        <a href={props.url} >
            <h2 className="artist-name">
                {props.name}
            </h2>
        </a>
    )
    };

    // return (
    //     <>
            {/* {artistName.map(props => {
                return (
                    <a href={props.url} >
                        <h2 className="artist-name">
                            {props.name}
                        </h2>
                    </a>
            )
        })}
        </>
    ); */}
// };
/*
const ArtistName = (props) => {
   
}*/

export default ArtistName;
