import React from 'react';
import './fonts.css';
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div style={{ "height": "64px" }} />
      <h1 style={{ "textAlign": "center" }} id="test1">test</h1>
      <img src='https://amogus.org/amogus.png' alt="amogus" />
      <h1 style={{ "textAlign": "center" }} id="test2">test 2</h1>
      <img src='https://amogus.org/amogus.png' alt="amogus" />
    </div>
  );
}

export default App;
