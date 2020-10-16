import React from 'react'
import data from './data.json'
import Card from './Card';
import PageTitle from './Page-title';

console.log(data.albums.items)
export const App = () => {
  return (
    <>
      <PageTitle />
      <div className="card-wrapper" key={data.albums.items.id}>
        <Card key={data.albums.items} />
      </div>
    </>
  )
}



