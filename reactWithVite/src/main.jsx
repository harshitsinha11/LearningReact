import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'
import App from './App.jsx'

const elem = React.createElement(
    'a',
    {
        href : 'https://doodles.google/',
        target : "_blank"
    },
    'Vist Doodles'
)
createRoot(document.getElementById('root')).render(
    <App />
)
