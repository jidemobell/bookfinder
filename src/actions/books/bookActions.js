import * as actionTypes from '../actionTypes';

/**
 * The function is used to search for
 * books
 */

function fetcher(url, options, time) {
  return Promise.race([
    fetch(url, options),
    new Promise((resolve, reject) => {
      setTimeout(() => reject(new Error(`timeout error: `)), time);
    }),
  ]);
}

function handleError() {
  return {
    type: actionTypes.SEARCH_ERROR,
    payload: 'timeout',
  };
}

export function getBookAction(data) {
  return {
    type: actionTypes.FIND_BOOKS,
    payload: data.totalItems > 0 ? data.items : 0,
  };
}

export function passLoaded() {
  return {
    type: actionTypes.PASS_LOADED,
    payload: false,
  };
}

// export function getBooks(val) {
//   return (dispatch) => {
//     return fetch(
//       `https://www.googleapis.com/books/v1/volumes?q=intitle:${val}&maxResults=12`,
//       {
//         method: 'GET',
//       },
//     )
//       .then(response => response.json())
//       .then((json) => {
//         dispatch(getBookAction(json));
//       });
//   };
// }

export function getBooks(val) {
  return (dispatch) => {
    return fetcher(
      `https://www.googleapis.com/books/v1/volumes?q=intitle:${val}&maxResults=12`,
      {
        method: 'GET',
      },
      7000,
    )
      .then(response => response.json())
      .then((json) => {
        dispatch(getBookAction(json));
      })
      .catch(error => dispatch(handleError(error)));
  };
}

export function searchIndex(val) {
  return {
    type: actionTypes.SEARCH_INDEX,
    payload: val,
  };
}

export function onSubmitSucceed(val) {
  return {
    type: actionTypes.SUBMIT_SUCCESS,
  };
}

export function removeIndex() {
  return {
    type: actionTypes.SEARCH_INDEX,
    payload: '',
  };
}

export function setLoaded() {
  return {
    type: actionTypes.SET_LOADED,
    payload: true,
  };
}

export function destroyLoaded() {
  return {
    type: actionTypes.DESTROY_LOADED,
    payload: undefined,
  };
}

export function clearAllForm() {
  return {
    type: actionTypes.CLEAR_FORM,
  };
}

export function showCross() {
  return {
    type: actionTypes.SHOW_CROSS,
    payload: "show-span",
  };
}

export function hideCross() {
  return {
    type: actionTypes.HIDE_CROSS,
    payload: "hide-span",
  };
}
