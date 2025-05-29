import React from 'react'
import "./Column.css";
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import Card from './Card';

const Column = ({ cards, upperLimit, lowerLimit }) => {

  //Will make it so the collum only has a specific number of cards
  const goodCards = cards.filter(card =>
    card.id < upperLimit && card.id > lowerLimit
  );

  return (
    <div className='column'>
        <SortableContext items={cards} strategy={verticalListSortingStrategy}>
            {goodCards.map(card => (
                <Card id={card.id} suit={card.suit} key={card.id}/>
            ))}
        </SortableContext>
    </div>
  )
}

export default Column