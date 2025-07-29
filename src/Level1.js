//Will be used to create the first level
import './Level1.css';
import { useState } from 'react';
import king_of_clubs from './images/king_of_clubs.png'
import king_of_diamonds from './images/king_of_diamonds.png'
import king_of_spades from './images/king_of_spades.png'
import king_of_hearts from './images/king_of_hearts.png'
import Content from './Content';

const Level1 = () => {

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

  //Will determine if the order of the cards is the same as the winning order
  const handleCheckButtonPress = () => {
    console.log(cards)
    for(let i = 0; i < cards.length; i++){
      if(cards[i].id !== winningOrder[i]){
        return
      }
    }

    setHasWon(true)
  }

  return (
    <div>
      {!hasWon && (
        <div>
          <header>
            In order to win, make the order, from top to bottom, Heart, Club, Spade, Diamond
          </header>
          <Content cards={cards} setCards={setCards} handleCheckButtonPress={handleCheckButtonPress}/>
        </div>
      )}
      {hasWon && (
        <h1>You Won</h1>
      )}
    </div>
  );
}

export default Level1;