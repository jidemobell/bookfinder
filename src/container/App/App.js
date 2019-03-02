import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../../actions/books/bookActions';

// import Finder from '../../components/BookShelf/BookShelf';
import FinderApp from '../../components/App/App';

const mapStateToProps = (state) => {
  console.log('state at main find', state);
  return {
    booksArray: state.stateDate.booklist,
    formsEntry: state.stateDate.index,
    loaded: state.stateDate.loaded,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(Object.assign(actions), dispatch),
  };
};

const App = connect(mapStateToProps, mapDispatchToProps)(FinderApp);

export default App;
