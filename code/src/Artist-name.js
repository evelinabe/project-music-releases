import React from 'react'

const ArtistName = (props) => {
  return (
    props.artistsArray.map((artist, i, array) => {
      return (
        <a className="artist-link" key={artist.id} href={artist.external_urls.spotify}>
          <p className="artist-name">
          {array.length > 1 && array.length!==2 && i < array.length - 1  && i !== array.length-2  ? artist.name + ',  ' 
            :i === array.length-2 ? artist.name + ' &'
            : artist.name}
          </p>
        </a>
      )

    })
  )
}

export default ArtistName
