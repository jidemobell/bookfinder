import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../../actions/books/bookActions';

import Finder from '../../components/Finder';

const mapStateToProps = (state) => {
  console.log('state at finder', state);
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

const App = connect(mapStateToProps, mapDispatchToProps)(Finder);

export default App;
