import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { reduxForm, Field, reset, stopSubmit } from 'redux-form';

import * as bookactions from '../../actions/books/bookActions';

const required = (value) => {
  return (value) ? undefined : 'Error: Please provide a search query first';
};

const minValue = (value) => {
  return value && value.length < 3 ? `Error: Please check the query length` : undefined;
};

const bookField = ({
  input,
  placeholder,
  className,
  type,
  meta: { touched, error },
}) => (
  <div>
    <div>
      <input {...input} type={type} placeholder={placeholder} className={className} />
    </div>
    {touched && ((error && <p style={{ color: 'red', marginTop: '10px', fontSize: '10px', marginLeft: '150px' }}>{error}</p>))}
  </div>
);

// const afterSubmit = (result, dispatch) => {
//   dispatch(reset('booksForm'));
// };

// const afterFail = (error, dispatch) => {
//   dispatch(reset('booksForm'));
// };

class FinderForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  // componentWillReceiveProps(nextProps) {
  //   const { actions } = this.props;
  //   if (nextProps !== this.props) {
  //     console.log('initial', this.props);
  //     console.log('nextProps', nextProps);
  //     // if (nextProps.formsEntry.books !== undefined && nextProps.formsEntry.books.length > 0) {
  //     //   actions.getBooks(nextProps.formsEntry.books);
  //     //   actions.removeIndex();
  //     // }
  //   }
  // }
  // componentDidUpdate(prevProps, prevState, snapshot) {
  //   if (this.props !== prevProps) {
  //     console.log('present props', this.props); 
  //     console.log('previous props', prevProps);
  //   }
  // }

  Submit(val) {
    const { actions } = this.props;
    // actions.setloaded();
    actions.searchIndex(val);
  }

  handleClick() {
    const { actions } = this.props;
    actions.setLoaded();
  }

  render() {
    const { submitting, handleSubmit } = this.props;
    return (
      <div>
        <form onSubmit={handleSubmit(val => this.Submit(val))} autoComplete="off">
          <div className="form-item" style={{ marginBottom: '20px' }}>
            <Field
              type="input"
              name="books"
              placeholder="Search by book title or author..."
              component={bookField}
              className="findbar"
              validate={[required, minValue]}
            />
          </div>
          <div className="form-item" style={{ marginBottom: '20px' }}>
            <input
              type="submit"
              value="Search"
              className="find"
              disabled={submitting}
              onClick={this.handleClick}
            />
          </div>
        </form>
      </div>
    );
  }
}

const mapStatetToProps = (state) => {
  return {
    books: state.stateDate.booklist,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(Object.assign(bookactions), dispatch),
  };
};

const SearchBar = connect(mapStatetToProps, mapDispatchToProps)(reduxForm({
  form: 'booksForm',
  // onSubmitSuccess: afterSubmit,
  // onSubmitFail: afterFail,
})(FinderForm));

export default SearchBar;
