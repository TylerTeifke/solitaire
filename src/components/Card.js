import React from 'react'
import "./Card.css";
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

const Card = ({ id, suit }) => {
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
        {suit}
    </div>
  )
}

export default Card