//Will be used to create the second level
import './Level.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import king_of_clubs from '../images/king_of_clubs.png'
import king_of_diamonds from '../images/king_of_diamonds.png'
import king_of_spades from '../images/king_of_spades.png'
import king_of_hearts from '../images/king_of_hearts.png'
import queen_of_clubs from '../images/queen_of_clubs.png'
import queen_of_diamonds from '../images/queen_of_diamonds.png'
import queen_of_spades from '../images/queen_of_spades.png'
import queen_of_hearts from '../images/queen_of_hearts.png'
import Content from '../components/Content';

const Level2 = () => {

  let navigate = useNavigate();

  const [cards, setCards] = useState([
    { id: 1, suit: "King of Diamonds", flipped: true, card_image: king_of_diamonds },
    { id: 2, suit: "King of Clubs", flipped: true, card_image: king_of_clubs },
    { id: 3, suit: "King of Spades", flipped: true, card_image: king_of_spades },
    { id: 4, suit: "King of Hearts", flipped: true, card_image: king_of_hearts },
    { id: 5, suit: "Queen of Diamonds", flipped: true, card_image: queen_of_diamonds},
    { id: 6, suit: "Queen of Clubs", flipped: true, card_image: queen_of_clubs},
    { id: 7, suit: "Queen of Spades", flipped: true, card_image: queen_of_spades},
    { id: 8, suit: "Queen of Hearts", flipped: false, card_image: queen_of_hearts}
  ]);
  //Will be used to determine what order of cards is required to win
  const [winningOrder] = useState([4, 8, 2, 6, 3, 7, 1, 5])

  //Will determine if the order of the cards is the same as the winning order
  const handleCheckButtonPress = () => {
    console.log(cards)
    for(let i = 0; i < cards.length; i++){
      if(cards[i].id !== winningOrder[i]){
        return
      }
    }

    navigate("/WinScreen")
  }

  return (
    <div>
      <header>
        This level is a bit trickier as it adds queen cards. The goal is to order
        by the suits from top to bottom as Heart, Club, Spade, Diamond, with each
        queen card going below its respective king card
      </header>
      <Content cards={cards} setCards={setCards} handleCheckButtonPress={handleCheckButtonPress}/>
    </div>
  );
}

export default Level2