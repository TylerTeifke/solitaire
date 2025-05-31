import './App.css';
import React, { useState, useRef, useEffect } from 'react';
import { closestCorners, DndContext } from '@dnd-kit/core';
import Column from './components/Column';
import { arrayMove } from '@dnd-kit/sortable';

function App() {

  const dragItem = useRef();
  const [cards, setCards] = useState([
    { id: 1, suit: "King of Diamonds", flipped: true },
    { id: 2, suit: "King of Clubs", flipped: true },
    { id: 3, suit: "King Spades", flipped: true },
    { id: 4, suit: "King of Hearts", flipped: false },
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

      //Flips the cards if one of them was moved to the bottom of the stack
      //if(newPos === cards.length - 1){
        //console.log(cards[newPos])
        //cards[originalPos].flipped = !cards[originalPos].flipped;
        //cards[newPos].flipped = !cards[newPos].flipped;
        //console.log(cards[newPos])
        //handleChangePlacement(over.id)
      //}

      //Updates the placement of the elements in the cards array
      return arrayMove(cards, originalPos, newPos)
    })

    //handleChangePlacement();
    console.log(cards)
  }

  //Will flip a card if it is now on the bottom of the stack
  const handleChangePlacement = async () => {
    //const newCards = cards;
    //console.log(newCards);
    //const index = cards.findIndex(card => card.id === id);

    //Will hold the variables for the flipped card
    //const newId = index + 1;
    //const newFlip = !cards[index].flipped;
    //const suit = cards[index].suit;

    //const flippedCard = { newId, suit, newFlip };
    cards[cards.length - 1].flipped = false;

    setCards(cards);
  }

  return (
    <div>
      {/**Anything involving dragging and dropping needs to be enclosed in DndContext*/}
      <DndContext onDragEnd={handleDragEnd} collisionDetection={closestCorners}>
        <Column cards={cards} />
      </DndContext>
    </div>
  );
}

export default App;
