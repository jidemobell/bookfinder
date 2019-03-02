import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../../actions/books/bookActions';

// import Finder from '../../components/BookShelf/BookShelf';
import App from '../../components/BookShelf/BookShelf';

const mapStateToProps = (state) => {
  return {
    booksArray: state.stateDate.booklist,
    formsEntry: state.stateDate.index,
    // loaded: false,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(Object.assign(actions), dispatch),
  };
};

const BookShelf = connect(mapStateToProps, mapDispatchToProps)(App);

export default BookShelf;
