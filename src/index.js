// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App, { Touch } from './App';
import registerServiceWorker from './registerServiceWorker';
import Reducer from './reducer'
import { createStore } from 'redux'
import { Provider } from 'react-redux'


const store = createStore(Reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
<Provider store={store}>
  <div>
    <h3>HTML5 Drag and Drop</h3>
    <App />
    <br/>
    <h3>Mobile Touch</h3>
    <Touch />
  </div>
</Provider>, document.getElementById('root'));
registerServiceWorker();
