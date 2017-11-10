// Card.js
import React from 'react'

const Card = ({text}) => {
  return (
    <div style={style}>
      {text}
    </div>
  )
}

export default Card;




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
