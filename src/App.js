// App.js
import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardColumn from './CardColumn';
import { newCard } from './actions';

class App extends Component {
  newCard = () => {
    this.props.newCard()
  }

  render() {
    const { todo, working, done } = this.props.cards
    return (
      <div>
        <button
          onClick={this.newCard}
          style={style}
        >
          New Card
        </button>
        <div style={{display: 'flex'}}>
          <CardColumn cards={todo}/>
          <CardColumn cards={working}/>
          <CardColumn cards={done}/>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const cards = {
    todo: [],
    working: [],
    done: [],
  };

  state.cards.forEach(card => {
    cards[card.column].push(card)
  })

  return {
    cards
  }
}

export default connect(
  mapStateToProps,
  { newCard }
)(App);

const style = {
  width: '100px',
  height: '30px',
  padding: '5px',
  margin: '5px',
  backgroundColor: 'cadetblue',
  color: 'white',
  border: 'solid thin cadetblue',
  borderRadius: '5px'
}
