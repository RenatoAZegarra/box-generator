import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import ColorForm from './components/text';
import ColorDisplay from './components/display';

function App() {

  const [boxes,setBoxes] = useState([]);

  const addBox = (box) => {
    setBoxes([...boxes,box]);
  };

  return (
    <div className="App">
      <ColorForm addBox={addBox}/>
      <ColorDisplay boxes={boxes} />
    </div>
  );
}

export default App;
