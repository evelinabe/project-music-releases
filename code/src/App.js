import React from 'react'
import data from './data.json'
import Card from './Card';
import PageTitle from './Page-title';

console.log(data)

export const App = () => {
  return (
    <div>
      <PageTitle />
      <Card />
      
    </div>
  )
}



