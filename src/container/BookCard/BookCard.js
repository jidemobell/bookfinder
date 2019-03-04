import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/books/bookActions';

class Books extends React.Component {
  render() {
    const { title, author, publisher, thumbnail, previewLink } = this.props;
    return (
      <div className="card">
        <div className="preview">
          <img src={thumbnail} alt="book-prev" />
        </div>
        <div className="details">
          <div className="upper">
            <h3>{title}</h3>
            <p>By: {author}</p>
            <p>Published By: {publisher}</p>
          </div>
          <button type="submit">
            <a href={previewLink}>
              See this Book
            </a>
          </button>
        </div>
      </div>
    );
  }
}

const mapStatetToProps = (state) => {
  return {
    list: state.stateDate.booklist,
  };
};


const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(Object.assign(actions), dispatch),
  };
};

const BookCard = connect(mapStatetToProps, mapDispatchToProps)(Books);

export default BookCard;
