import { ADD_ARTICLE, DATA_LOADED } from '../constants/action-types';

export function addArticle(article) {
  return { type: ADD_ARTICLE, payload: article };
}

export function getData() {
  return dispatch =>
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(resp => resp.json())
      .then(data => {
        return dispatch({ type: DATA_LOADED, payload: data });
      });
}
