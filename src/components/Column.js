import React from 'react'
import "./Column.css";
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import Card from './Card';

const Column = ({ cards }) => {

  return (
    <div className='column'>
        <SortableContext items={cards} strategy={verticalListSortingStrategy}>
            {cards.map(card => (
                <Card id={card.id} suit={card.suit} flipped={card.flipped} key={card.id}/>
            ))}
        </SortableContext>
    </div>
  )
}

export default Column