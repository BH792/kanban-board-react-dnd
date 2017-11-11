// CardColumn.js
import React from 'react';
import Card from './Card';
import { DropTarget } from 'react-dnd'

const CardColumn = ({
  cards,
  column,
  connectDropTarget
}) => {
  return connectDropTarget(
    <div style={style}>
      <center><h3>{column}</h3></center>
      {cards.map(card => {
        return <Card key={card.id} card={card} />
      })}
    </div>
  )
}

const columnTarget = {
  drop(props, monitor) {
    console.log('Column Drop Fired');
    const id = monitor.getItem().id;
    const column = props.column;
    if (!props.cards.some(card => card.id === id)) {
      props.drop(id, column);
    }
    if (monitor.getDropResult()) {
      props.swap(id, monitor.getDropResult().dropId)
    }
  }
}

function collect(connect) {
  return {
    connectDropTarget: connect.dropTarget()
  }
}

export default DropTarget('CARD', columnTarget, collect)(CardColumn);

const style = {
  width: '210px',
  border: 'solid thin black',
}
