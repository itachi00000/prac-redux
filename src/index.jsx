import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// store (contains reducer)
import store from './js/store/index';
// compo
import App from './App';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
