// actions.js
import catchphraser from './catchphraser';
import uuidv4 from 'uuid/v4'

export const changeCardOrder = (dragId, dropId) => {
  return {
    type: 'SWAP_CARD',
    dragId,
    dropId
  }
}

export const changeCardColumn = (id, newColumn) => {
  return {
    type: 'CHANGE_CARD_COLUMN',
    card: {
      id,
      column: newColumn
    }
  }
}

export const newCard = () => {
  return {
    type: 'NEW_CARD',
    card: {
      id: uuidv4(),
      text: catchphraser(),
      column: randColumn()
    }
  }
}

const columns = ['todo', 'working', 'done']
const randColumn = () => {
  return columns[Math.floor(Math.random() * 3)]
}
