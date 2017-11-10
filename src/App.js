// App.js
import React, { Component } from 'react';
import HTML5Backend from 'react-dnd-html5-backend';
import CardColumn from './CardColumn';
import { connect } from 'react-redux';
import { DragDropContext } from 'react-dnd';
import { newCard, changeCardColumn } from './actions';

class App extends Component {
  newCard = () => {
    this.props.newCard()
  }

  render() {
    const { changeCardColumn } = this.props
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
          <CardColumn
            column={'todo'}
            cards={todo}
            drop={changeCardColumn}
          />
          <CardColumn
            column={'working'}
            cards={working}
            drop={changeCardColumn}
          />
          <CardColumn 
            column={'done'}
            cards={done}
            drop={changeCardColumn}
          />
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

export default DragDropContext(HTML5Backend)(
  connect(mapStateToProps, { newCard, changeCardColumn })(App)
);

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
