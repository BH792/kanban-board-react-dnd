// reducer.js
export default (
  state = {
    cards: [],
    byId: {},
    todo: [],
    working: [],
    done: []
  },
  action
) => {
  switch (action.type) {
    case 'SWAP_CARD':
      const columnName = state.byId[action.dropId].column
      let column = [ ...state[columnName]]
      const curIndex = column.indexOf(action.dragId)
      const newIndex = column.indexOf(action.dropId)
      const item = column.splice(curIndex, 1)
      column = column.slice(0, newIndex).concat(item).concat(column.slice(newIndex))
      return {
        ...state,
        [columnName]: column
      }
    case 'CHANGE_CARD_COLUMN':
      return {
        ...state,
        byId: {
          ...state.byId,
          [action.card.id]: {
            ...state.byId[action.card.id],
            column: action.card.column
          }
        },
        [state.byId[action.card.id].column]: state[state.byId[action.card.id].column].filter(id => id !== action.card.id),
        [action.card.column]: [...state[action.card.column], action.card.id]
      }
    case 'NEW_CARD':
      return {
        ...state,
        byId: {
          ...state.byId,
          [action.card.id]: action.card
        },
        [action.card.column]: [...state[action.card.column], action.card.id]
      }
    default:
      return state;
  }
}
