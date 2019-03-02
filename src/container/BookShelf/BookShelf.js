import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../../actions/books/bookActions';

import App from '../../components/BookShelf/BookShelf';

const mapStateToProps = (state) => {
  return {
    booksArray: state.stateDate.booklist,
    formsEntry: state.stateDate.index,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(Object.assign(actions), dispatch),
  };
};

const BookShelf = connect(mapStateToProps, mapDispatchToProps)(App);

export default BookShelf;
