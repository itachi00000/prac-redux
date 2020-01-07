import { ADD_ARTICLE } from '../constants/action-types';

const forbiddenWords = ['spam', 'money', 'pride'];

export function forbiddenWordsMiddleware({ dispatch }) {
  return next => action => {
    if (action.type === ADD_ARTICLE) {
      const foundWord = forbiddenWords.filter(word =>
        action.payload.title.includes(word)
      );

      if (foundWord.length) {
        return dispatch({ type: 'FOUND_BAD_WORD' });
      }
    }
    return next(action);
  };
}

export function otherMiddleware() {}