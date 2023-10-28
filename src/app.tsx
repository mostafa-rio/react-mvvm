import React from 'react'
import cupCakeImage from './assets/cupCake.webp'
import './styles/main.css';
const App = function() {
    return <div>
        hellow oh now hmr
        <img src={cupCakeImage} alt="Cup Cake" width={50}/>
        <button className='btn'>
            Click me to update
        </button>
    </div>
}

export default App;