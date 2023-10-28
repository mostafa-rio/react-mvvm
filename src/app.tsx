import React from 'react'
import cupCakeImage from './assets/cupCake.webp'
import './styles/main.css'
const App = function () {
  return (
    <div>
      Hello from react
      <img id="cupcake-image" src={cupCakeImage} alt="Cup Cake" width={50} />
      <button className="btn">Click Here</button>
    </div>
  )
}

export default App
