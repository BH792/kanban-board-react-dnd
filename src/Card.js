// Card.js
import React from 'react'
import { DragSource, DropTarget } from 'react-dnd'

const Card = ({
  card,
  connectDragSource,
  connectDropTarget,
  isOver,
  isDragging
}) => {
  return connectDropTarget(connectDragSource(
    <div style={{
      ...style,
      opacity: isDragging ? 0 : 1,
      backgroundColor: isOver ? '#E6E6FA' : 'white'
    }}>
      {card.text}
    </div>
  ))
}

const cardSource = {
  beginDrag(props) {
    return {
      id: props.card.id
    }
  }
}

function dragCollect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
}

const cardTarget = {
  drop(props, monitor) {
    return {
      dropId: props.card.id
    }
  },
  canDrop(props, monitor) {
    return props.card.id !== monitor.getItem().id
  }
}

function dropCollect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  }
}

export default DropTarget('CARD', cardTarget, dropCollect)(
  DragSource('CARD', cardSource, dragCollect)(Card)
);

const style = {
  border: 'solid thin black',
  borderRadius: '5px',
  padding: '5px',
  margin: '5px',
  height: '58px',
  width: '188px',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
}
