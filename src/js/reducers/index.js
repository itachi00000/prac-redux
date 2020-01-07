import { ADD_ARTICLE } from '../constants/action-types';

const initialState = {
  articles: []
};

function rootReducers(state = initialState, action) {
  switch (action.type) {
    case ADD_ARTICLE:
      return { ...state, articles: state.articles.concat(action.payload) };
    default:
      return state;
  }
}

export default rootReducers;
