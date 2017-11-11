// App.js
import React, { Component } from 'react';
import HTML5Backend from 'react-dnd-html5-backend';
import TouchBackend from 'react-dnd-touch-backend';
import CardColumn from './CardColumn';
import { connect } from 'react-redux';
import { DragDropContext } from 'react-dnd';
import { newCard, changeCardColumn, changeCardOrder } from './actions';

class App extends Component {
  newCard = () => {
    this.props.newCard()
  }

  render() {
    const { changeCardColumn, changeCardOrder } = this.props
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
            swap={changeCardOrder}
          />
          <CardColumn
            column={'working'}
            cards={working}
            drop={changeCardColumn}
            swap={changeCardOrder}
          />
          <CardColumn
            column={'done'}
            cards={done}
            drop={changeCardColumn}
            swap={changeCardOrder}
          />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    cards: {
      todo: state.todo.map(id => state.byId[id]),
      working: state.working.map(id => state.byId[id]),
      done: state.done.map(id => state.byId[id]),
    }
  };
}

export default DragDropContext(HTML5Backend)(
  connect(mapStateToProps, { newCard, changeCardColumn, changeCardOrder })(App)
);

export const Touch = DragDropContext(TouchBackend)(
  connect(mapStateToProps, { newCard, changeCardColumn, changeCardOrder })(App)
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
