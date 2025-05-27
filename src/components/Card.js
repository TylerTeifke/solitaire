import React, { useState, useRef } from 'react';
import Draggable from 'react-draggable';

const Card = ({ suit, startX, startY }) => {
    const [isDragging, setIsDragging] = useState(false);
    const [position, setPosition] = useState({ x: startX, y: startY });
    const dragStartPos = useRef({ x: startX, y: startY });
    const elementRef = useRef(null);

    //Is used to detect when the mouse is clicking on a card
    const handleMouseDown = (e) => {
        setIsDragging(true);
        dragStartPos.current = { x: e.clientX, y: e.clientY };
    };

    //Determines where the position of the card is while the mouse is moving it
    const handleMouseMove = (e) => {
        if (!isDragging) return;

        const deltaX = e.clientX - dragStartPos.current.x;
        const deltaY = e.clientY - dragStartPos.current.y;

        setPosition((prev) => ({
        x: prev.x + deltaX,
        y: prev.y + deltaY,
        }));

        dragStartPos.current = { x: e.clientX, y: e.clientY };
    };

    //Places the card down when the mouse is released
    const handleMouseUp = () => {
        setIsDragging(false);
    };

    return (
        <div
            ref={elementRef}
            style={{
            position: 'absolute',
            left: position.x,
            top: position.y,
            backgroundColor: 'lightblue',
            padding: '20px',
            cursor: 'grab',
            }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
        >
            {suit}
        </div>
    )
}

export default Card