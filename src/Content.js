// Will be used to display the contents of each level
import './Content.css';
import { closestCorners, DndContext } from '@dnd-kit/core';
import Column from './components/Column';
import { arrayMove } from '@dnd-kit/sortable';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const Content = ({ cards, setCards, handleCheckButtonPress }) => {
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
            <p>
                Press the "Reset Cards" button to reset the cards.
            </p>
            <p>
                Press the "Check Answer" button to check your answer.
            </p>
            <DropdownButton align="center" id="level-select-button" title="Level Select">
                <Dropdown.Item href="/">Level 1</Dropdown.Item>
                <Dropdown.Item href="/Level2">Level 2</Dropdown.Item>
            </DropdownButton>
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
  );
}

export default Content