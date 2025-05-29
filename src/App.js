import './App.css';
import Card from './components/Card';
import React, { useState, useRef } from 'react';
import { closestCorners, DndContext } from '@dnd-kit/core';
import Column from './components/Column';
import { arrayMove } from '@dnd-kit/sortable';

function App() {

  const dragItem = useRef();
  const [cards, setCards] = useState([
    { id: 1, suit: "King of Diamonds" },
    { id: 2, suit: "King of Clubs" },
    { id: 3, suit: "King Spades" },
    { id: 4, suit: "King of Hearts" },
    { id: 5, suit: "Queen of Diamonds" },
    { id: 6, suit: "Queen of Clubs" },
    { id: 7, suit: "Queen Spades" },
    { id: 8, suit: "Queen of Hearts" },
  ]);

  const getCardPos = id => cards.findIndex(card =>
    card.id === id
  )

  const handleDragEnd = Event => {
    //active is the element that is currently being dragged.
    //over is the element that will be replaced once the active element is released
    const {active, over} = Event

    if(active.id === over.id) return;

    setCards(cards => {
      const originalPos = getCardPos(active.id)
      const newPos = getCardPos(over.id)

      //Updates the placement of the elements in the cards array
      return arrayMove(cards, originalPos, newPos)
    })
  }

  return (
    <div>
      {/**Anything involving dragging and dropping needs to be enclosed in DndContext*/}
      <DndContext onDragEnd={handleDragEnd} collisionDetection={closestCorners}>
        <Column cards={cards} upperLimit={5} lowerLimit={0}/>
      </DndContext>
      <DndContext onDragEnd={handleDragEnd} collisionDetection={closestCorners}>
        <Column cards={cards} upperLimit={9} lowerLimit={4}/>
      </DndContext>
    </div>
  );
}

export default App;
