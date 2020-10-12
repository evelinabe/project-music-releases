import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Card from './Card';
import PageTitle from './Page-title';

const App = () => {
    return (
        <>
            <PageTitle />
            <Card />
        </>
    )
}


ReactDOM.render(<App />, document.getElementById('root'))
