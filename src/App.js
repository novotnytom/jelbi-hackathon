import React from 'react';
import Map from './components/map'

import sign from './schild.png'

function App() {
  return (
    <div>

    <div className="header">
    <h3>Carpooling Router</h3>
    </div>

    <div className="content">    
    
    <div className="hero-section">
      <img src={sign} className="sign"></img>
      <div className="description">
      <h1>At least 3 people in a car?</h1>
      <p>Since January 2020 there is a new traffic sign for carpooling.
      Get the maximum profit of free bus lines during the rush hour!</p>
      </div>
    </div>
                   
    <Map />
    </div>

    <div className="footer">
    <p>Coded in less than 24h by Tomas Novotny <br></br>novotny.tom@gmail.com</p>
    <p><i>Note: Road information prevails. Always drive vigilantly according to road conditions and in accordance with traffic laws!</i></p>
    </div>

    </div>
  );
}

export default App;
