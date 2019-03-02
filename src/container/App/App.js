import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../../actions/books/bookActions';

import FinderApp from '../../components/App/App';

const mapStateToProps = (state) => {
  return {
    booksArray: state.stateDate.booklist,
    formsEntry: state.stateDate.index,
    loading: state.stateDate.loading,
    spanValue: state.stateDate.spanValue,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(Object.assign(actions), dispatch),
  };
};

const App = connect(mapStateToProps, mapDispatchToProps)(FinderApp);

export default App;
