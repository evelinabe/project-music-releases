import React from 'react'

import Card from './Card'
import PageTitle from './Page-title'

export const App = () => {
  return (
    <>
      <PageTitle />
      <div className="card-wrapper">
        <Card />
      </div>
    </>
  )
}



