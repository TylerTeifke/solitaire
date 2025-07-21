import './App.css';
import { useState, useRef } from 'react';
import { closestCorners, DndContext } from '@dnd-kit/core';
import Column from './components/Column';
import { arrayMove } from '@dnd-kit/sortable';
import KingOfClubs from './images/king_of_clubs.svg'
//import king_of_diamonds from './images/king_of_diamonds.svg'
//import king_of_spades from './images/king_of_spades.svg'
//import king_of_hearts from './images/king_of_hearts.svg'
//import { king_of_clubs, king_of_diamonds, king_of_spades, king_of_hearts } from './images'

function App() {

  const dragItem = useRef();
  const [cards, setCards] = useState([
    { id: 1, suit: "King of Diamonds", flipped: true },
    { id: 2, suit: "King of Clubs", flipped: true },
    { id: 3, suit: "King of Spades", flipped: true },
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
      if(newPos === cards.length - 1){
        cards[originalPos].flipped = false;
        cards[newPos].flipped = true;
      }
      //Flips the cards if the bottom card is moved to the top
      else if(originalPos === cards.length - 1){
        cards[originalPos].flipped = true;
        cards[cards.length - 2].flipped = false;
      }

      //Updates the placement of the elements in the cards array
      return arrayMove(cards, originalPos, newPos)
    })
  }

  const handleButtonPress = () => {
    console.log("Button Pressed");
    const sortedCards = cards.toSorted(function(a, b){return a.id - b.id})

    //Will flip every card except for the last card
    for(let i = 0; i < sortedCards.length - 1; i++){
      sortedCards[i].flipped = true
    }
    sortedCards[sortedCards.length - 1].flipped = false

    setCards(sortedCards)
  }

  return (
    <div>
      {/**Anything involving dragging and dropping needs to be enclosed in DndContext*/}
      <DndContext onDragEnd={handleDragEnd} collisionDetection={closestCorners}>
        <Column cards={cards} />
      </DndContext>
      <button title="reset button" onClick={handleButtonPress}>
        Reset Cards
      </button>
    </div>
  );
}

export default App;
