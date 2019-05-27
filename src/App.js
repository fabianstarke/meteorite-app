import React from 'react';
import './App.css';
import SimpleTable from './Table'
import nasa from './nasa.png'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div> METEORITE EXPLORER</div>
        <img src={nasa} alt="logo" height="60" />
      </header>
      <SimpleTable />
    </div>
  );
}

export default App;
