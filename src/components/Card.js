import React from 'react'
import "./Card.css";
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

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
        {flipped && <p>Backside</p>}
        {!flipped && <p>{suit}</p>}
    </div>
  )
}

export default Card