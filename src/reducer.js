// reducer.js
export default (
  state = {
    cards: []
  },
  action
) => {
  switch (action.type) {
    case 'CHANGE_CARD_COLUMN':
      return {
        cards: state.cards.map(card => {
          if (card.id === action.card.id) {
            card.column = action.card.newColumn
          }
          return card
        })
      }
    case 'NEW_CARD':
      return {
        cards: [ ...state.cards, action.card]
      }
    default:
      return state;
  }
}
