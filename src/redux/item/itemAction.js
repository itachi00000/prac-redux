import { ADD_ITEM, DELETE_ITEM, SEARCH_ITEM } from '../actionTypes';

const nextItemId = 0;

export function addItem(item) {
  return {
    type: ADD_ITEM,
    id: nextItemId + 1,
    payload: item
  };
}

export function searchItem(query) {
  return {
    type: SEARCH_ITEM,
    payload: query
  };
}

export function deleteItem(id) {
  return {
    type: DELETE_ITEM,
    payload: id
  };
}
