import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavMenu from './Composant/navbar/NavBar.js';
 import data from './Composant/navbar/data.js';

 function App() {
  return (
    <div className="App">
      <NavMenu items={data} />
    </div>
  );
}

export default App;
