// Card.js
import React from 'react'
import { DragSource } from 'react-dnd'

const Card = ({
  card,
  connectDragSource
}) => {
  return connectDragSource(
    <div style={style}>
      {card.text}
    </div>
  )
}

const cardSource = {
  beginDrag(props) {
    return {
      id: props.card.id
    }
  }
}

function collect(connect) {
  return {
    connectDragSource: connect.dragSource()
  }
}

export default DragSource('CARD', cardSource, collect)(Card);

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
