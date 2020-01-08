import { ADD_ITEM, SEARCH_ITEM } from '../actionTypes';

import robotData from '../../robots';

const initState = {
  items: robotData,
  searchText: ''
};

export function itemReducer(state = initState, action) {
  switch (action.type) {
    case ADD_ITEM:
      return { ...state, items: [...state.items, action.payload] };
    case SEARCH_ITEM:
      return { ...state, searchText: action.payload };
    default:
      return state;
  }
}

export function searchItemReducer(state, action = {}) {
  switch (action.type) {
    default:
      return state;
  }
}
