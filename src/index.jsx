import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// store (contains reducer)
import store from './redux/store';
// compo
import App from './App';
//
import './bootstrap.min.css';

// window.store = store;
// window.addItem = addItem;

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
