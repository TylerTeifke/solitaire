import './App.css';
import { useState } from 'react';
//import { Button } from 'react-native';
//import { Button } from 'react-native/types_generated/index';
import { closestCorners, DndContext } from '@dnd-kit/core';
import Column from './components/Column';
import { arrayMove } from '@dnd-kit/sortable';
import king_of_clubs from './images/king_of_clubs.png'
import king_of_diamonds from './images/king_of_diamonds.png'
import king_of_spades from './images/king_of_spades.png'
import king_of_hearts from './images/king_of_hearts.png'

function App() {

  //Will determine when the game has been won or not
  const [hasWon, setHasWon] = useState(false)
  const [cards, setCards] = useState([
    { id: 1, suit: "King of Diamonds", flipped: true, card_image: king_of_diamonds },
    { id: 2, suit: "King of Clubs", flipped: true, card_image: king_of_clubs },
    { id: 3, suit: "King of Spades", flipped: true, card_image: king_of_spades },
    { id: 4, suit: "King of Hearts", flipped: false, card_image: king_of_hearts },
  ]);
  //Will be used to determine what order of cards is required to win
  const [winningOrder] = useState([4, 2, 3, 1])

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

    //checkCardOrder();
  }

  //Will determine if the order of the cards is the same as the winning order
  const handleCheckButtonPress = () => {
    console.log(cards)
    for(let i = 0; i < cards.length; i++){
      if(cards[i].id !== winningOrder[i]){
        //console.log(cards[i].id)
        //console.log(winningOrder[i])
        return
      }
    }

    setHasWon(true)
  }

  const handleResetButtonPress = () => {
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
      {!hasWon && (
        <div>
          <header>
            In order to win, make the order, from top to bottom, Heart, Club, Spade, Diamond
          </header>
          <p>
            Press the "Reset Cards" button to reset the cards.
          </p>
          <p>
            Press the "Check Answer" button to check your answer.
          </p>
          <DndContext onDragEnd={handleDragEnd} collisionDetection={closestCorners}>
            <Column cards={cards} />
          </DndContext>
          <button title="reset button" onClick={handleResetButtonPress}>
            Reset Cards
          </button>
          <button title='check answer button' onClick={handleCheckButtonPress}>
            Check Answer
          </button>
        </div>
      )}
      {hasWon && (
        <h1>You Won</h1>
      )}
    </div>
  );
}

export default App;
