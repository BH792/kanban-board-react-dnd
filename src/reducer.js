// reducer.js
export default (
  state = {
    cards: []
  },
  action
) => {
  switch (action.type) {
    case 'NEW_CARD':
      return {
        cards: [ ...state.cards, action.card]
      }
    default:
      return state;
  }
}
