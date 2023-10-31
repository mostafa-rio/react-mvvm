import reactDom from 'react-dom/client'
import React from 'react'
import App from './app'
const mdl = module as any
if (mdl.hot) mdl.hot.accept()

const root = reactDom.createRoot(document.getElementById('root'))
root.render(<App />)
