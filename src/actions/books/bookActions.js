import * as actionTypes from '../actionTypes';

/**
 * The function is used to search for
 * books
 */

function getBookAction(data) {
  return {
    type: actionTypes.FIND_BOOKS,
    payload: data.items,
  };
}

export function passLoaded() {
  return {
    type: actionTypes.PASS_LOADED,
    payload: false,
  };
}

export function getBooks(val) {
  return (dispatch) => {
    return fetch(
      `https://www.googleapis.com/books/v1/volumes?q=intitle:${val}&maxResults=9`,
      {
        method: 'GET',
      },
    )
      .then(response => response.json())
      .then((json) => {
        dispatch(getBookAction(json));
      });
  };
}

// export const getNewBooks = (val) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       return (dispatch) => {
//         return fetch(
//           `https://www.googleapis.com/books/v1/volumes?q=intitle:${val}&maxResults=9`,
//           {
//             method: 'GET',
//           },
//         )
//           .then(response => response.json())
//           .then((json) => {
//             dispatch(getBookAction(json));
//           });
//       };
//     });
//   });
// };


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

// export const setLoaded = new Promise((resolve, reject) => {
//   resolve({
//     type: actionTypes.SET_LOADED,
//     payload: true,
//   });
// });
