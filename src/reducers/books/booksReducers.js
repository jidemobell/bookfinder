import * as actionTypes from '../../actions/actionTypes';

const booksReducer = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.FIND_BOOKS:
      return { ...state, booklist: action.payload };
    case actionTypes.SEARCH_INDEX:
      return { ...state, index: action.payload };
    case actionTypes.SET_LOADED:
      return { ...state, loading: action.payload, booklist: undefined };
    case actionTypes.PASS_LOADED:
      return { ...state, loading: action.payload };
    case actionTypes.DESTROY_LOADED:
      return { ...state, loading: action.payload };
    case actionTypes.SHOW_CROSS:
      return { ...state, spanValue: action.payload };
    case actionTypes.HIDE_CROSS:
      return { ...state, spanValue: action.payload };
    default:
      return state;
  }
};

export default booksReducer;
