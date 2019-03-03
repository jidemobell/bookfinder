import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSadTear, faFrown } from '@fortawesome/free-solid-svg-icons';

import BookCard from '../../container/BookCard/BookCard';

const tear = <FontAwesomeIcon icon={faSadTear} />;
const frown = <FontAwesomeIcon icon={faFrown} />;

class BookShelf extends React.Component {
  componentWillReceiveProps(nextProps) {
    const { actions } = this.props;
    if (nextProps !== this.props) {
      if (nextProps.formsEntry.books !== undefined && nextProps.formsEntry.books.length > 0) {
        setTimeout(() => {
          actions.getBooks(nextProps.formsEntry.books);
          actions.removeIndex();
        }, 2500);
        actions.setLoaded();
      }
    }
  }

  render() {
    const { booksArray, loaded } = this.props;
    return (
      <section className="book-box" style={{ marginTop: "30px" }}>
        <div className="books">
          {
            Array.isArray(booksArray) && booksArray.map((books, i) => {
              return (
                <BookCard
                  key={`key-${books.etag}` !== undefined ? `key-${books.etag}` : ''}
                  title={books.volumeInfo.title !== undefined ? books.volumeInfo.title : ''}
                  author={books.volumeInfo.authors !== undefined ? books.volumeInfo.authors[0] : ''}
                  publisher={books.volumeInfo.publisher !== undefined ? books.volumeInfo.publisher : ''}
                  thumbnail={books.volumeInfo.imageLinks !== undefined ? books.volumeInfo.imageLinks.thumbnail : ''}
                  previewLink={books.volumeInfo.previewLink !== undefined ? books.volumeInfo.previewLink : ''}
                />
              );
            })
            }
          {
              booksArray === undefined && (
              <div className="initial-message">
                <p> {tear}   Nothing Here Yet - Try Searching For A Book!</p>
              </div>
              )
            }
          {
              booksArray === 0 && (
              <div className="initial-message">
                <p> {frown}   Nothing Found - Try Another Query!</p>
              </div>
              )
            }
          {
            booksArray === 'timeout' && (
              <div className="initial-message">
                <p> {frown}   Something Seems Wrong - Query Is Taking too Long, Try Again!</p>
              </div>
            )
          }
        </div>
      </section>
    );
  }
}


export default BookShelf;
