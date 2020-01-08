import { ADD_ITEM, SEARCH_ITEM } from '../actionTypes';

import robotData from '../../robots';

const initState = {
  items: robotData
};

export function itemReducer(state = initState, action) {
  console.log('actionpayload', action.payload);
  console.log(
    state.items.map(item => item.name.toLowerCase().includes(action.payload))
  );

  switch (action.type) {
    case ADD_ITEM:
      return { ...state, items: [...state.items, action.payload] };
    case SEARCH_ITEM:
      return {
        ...state,
        items: state.items.filter(item =>
          item.name.toLowerCase().includes(action.payload)
        )
      };
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
