import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import booksReducer from './books/booksReducers';
import { CLEAR_FORM } from '../actions/actionTypes';

const rootReducer = combineReducers({
  stateDate: booksReducer,
  form: formReducer.plugin({
    booksForm: (state, action) => {
      switch (action.type) {
        case CLEAR_FORM:
          return undefined;
        default:
          return state;
      }
    },
  }),
});

export default rootReducer;
