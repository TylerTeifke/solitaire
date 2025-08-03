//Will be used to create the first level
import './Level.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import king_of_clubs from './images/king_of_clubs.png'
import king_of_diamonds from './images/king_of_diamonds.png'
import king_of_spades from './images/king_of_spades.png'
import king_of_hearts from './images/king_of_hearts.png'
import Content from './Content';

const Level1 = () => {

  //Will randomize what the winning order is
  const randomizeOrder = () => {
    const order = []
    const suits = ["Diamond", "Club", "Spade", "Heart"]

    //Will insert a random suit into the order, until the order is complete
    while(order.length < 4){
      let newNum = (Math.random() * suits.length)

      order.push(suits.at(newNum))
      suits.splice(newNum, 1)
    }

    return order
  }

  //Will be used to navigate to other levels
  let navigate = useNavigate();

  //Will determine when the game has been won or not
  //const [hasWon, setHasWon] = useState(false)
  const [cards, setCards] = useState([
    { id: 1, suit: "Diamond", flipped: true, card_image: king_of_diamonds },
    { id: 2, suit: "Club", flipped: true, card_image: king_of_clubs },
    { id: 3, suit: "Spade", flipped: true, card_image: king_of_spades },
    { id: 4, suit: "Heart", flipped: false, card_image: king_of_hearts },
  ]);
  //Will be used to determine what order of cards is required to win
  const [winningOrder] = useState(randomizeOrder)

  //Will determine if the order of the cards is the same as the winning order
  const handleCheckButtonPress = () => {
    console.log(cards)
    for(let i = 0; i < cards.length; i++){
      if(cards[i].suit !== winningOrder[i]){
        return
      }
    }

    //Will move on to level 2 if the current level has been won
    navigate("/Level2")
  }

  return (
    <div>
      <header>
        In order to win, make the order, from top to bottom, { winningOrder[0] }, { winningOrder[1] }, { winningOrder[2] }, { winningOrder[3] }
      </header>
      <Content cards={cards} setCards={setCards} handleCheckButtonPress={handleCheckButtonPress}/>
    </div>
  );
}

export default Level1;