import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { reduxForm, Field, reset } from 'redux-form';

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

const afterSubmit = (result, dispatch) => {
  dispatch(reset('booksForm'));
};

const afterFail = (error, dispatch) => {
  dispatch(reset('booksForm'));
};

class FinderForm extends React.Component {
  constructor(props) {
    super(props);
    this.clearForm = this.clearForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const { actions } = this.props;
    actions.hideCross();
  }

  Submit(val) {
    const { actions } = this.props;
    actions.searchIndex(val);
  }

  clearForm() {
    const { actions } = this.props;
    actions.clearAllForm();
    actions.hideCross();
  }

  handleChange() {
    const { actions } = this.props;
    actions.showCross();
  }

  render() {
    const { submitting, handleSubmit, handleFormSubmit, localeSpan } = this.props;
    return (
      <div>
        <form onSubmit={handleSubmit(val => this.Submit(val))} autoComplete="off">
          <div className="form-item first-input" style={{ marginBottom: '20px' }}>
            <Field
              type="input"
              name="books"
              placeholder="Search by book title or author..."
              component={bookField}
              className="findbar"
              validate={[required, minValue]}
              defaultValue="test"
              onChange={(e) => { this.handleChange(); }}
            />
            <span
              style={{ fontSize: "20px" }}
              className={localeSpan}
              onClick={this.clearForm}
              role="presentation"
            >
              x
            </span>
          </div>
          <div className="form-item" style={{ marginBottom: '20px' }}>
            <input
              type="submit"
              value="Search"
              className="find"
              disabled={submitting}
              onClick={handleFormSubmit}
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
    localeSpan: state.stateDate.spanValue,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(Object.assign(bookactions), dispatch),
  };
};

const SearchBar = connect(mapStatetToProps, mapDispatchToProps)(reduxForm({
  form: 'booksForm',
})(FinderForm));

export default SearchBar;
