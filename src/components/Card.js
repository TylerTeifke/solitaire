import React from 'react'
import "./Card.css";
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import red_back_of_card from '../images/card_back_red.png';

const Card = ({ id, suit, flipped }) => {
    const {attributes, listeners, setNodeRef,
    transform, transition} = useSortable({id});

    const style = {
        transition,
        transform: CSS.Transform.toString(transform),
    };

  return (
    <div 
        ref={setNodeRef}   
        {...attributes} 
        {...listeners} 
        style={style}
        className='card'
    >
        {flipped && <img src={red_back_of_card} alt=''/>}
        {!flipped && <p>{suit}</p>}
    </div>
  )
}

export default Card