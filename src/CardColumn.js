// CardColumn.js
import React from 'react';
import Card from './Card';

const CardColumn = ({ cards }) => {
  return (
    <div style={style}>
      {cards.map(card => {
        return <Card key={card.id} text={card.text} />
      })}
    </div>
  )
}

export default CardColumn;

const style = {
  width: '210px',
  border: 'solid thin black',
}
