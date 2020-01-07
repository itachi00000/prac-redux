import { createStore, applyMiddleware } from 'redux';

// middlewares
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { forbiddenWordsMiddleware } from '../middleware/index';

// reducer
import rootReducers from '../reducers/index';

// m-ware
const middlewares = [logger, thunk, forbiddenWordsMiddleware];

const store = createStore(rootReducers, applyMiddleware(...middlewares));

export default store;
