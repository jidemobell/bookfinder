import * as actionTypes from '../../actions/actionTypes';

const booksReducer = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.FIND_BOOKS:
      return { ...state, booklist: action.payload };
    case actionTypes.SEARCH_INDEX:
      return { ...state, index: action.payload };
    case actionTypes.SET_LOADED:
      return { ...state, loading: action.payload };
    case actionTypes.PASS_LOADED:
      return { ...state, loading: action.payload };
    default:
      return state;
  }
};

export default booksReducer;
