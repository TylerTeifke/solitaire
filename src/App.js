import './App.css';
import Card from './components/Card';
import React, { useState, useRef } from 'react';

function App() {

  const dragItem = useRef();
  const [list, setList] = useState(['Item 1','Item 2','Item 3','Item 4','Item 5','Item 6']);

  return (
    <div>
      <Card suit={"Diamond"} startX={0} startY={0}/>
      <Card suit={"Spade"} startX={200} startY={0}/>
      <Card suit={"Heart"} startX={400} startY={0}/>
      <Card suit={"Club"} startX={600} startY={0}/>
    </div>
  );
}

export default App;
