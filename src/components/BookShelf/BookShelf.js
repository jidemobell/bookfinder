import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSadTear } from '@fortawesome/free-solid-svg-icons';

import BookCard from '../../container/BookCard/BookCard';

const tear = <FontAwesomeIcon icon={faSadTear} />;

class BookShelf extends React.Component {
  componentWillReceiveProps(nextProps) {
    const { actions } = this.props;
    if (nextProps !== this.props) {
      if (nextProps.formsEntry.books !== undefined && nextProps.formsEntry.books.length > 0) {
        setTimeout(() => {
          actions.getBooks(nextProps.formsEntry.books);
          actions.removeIndex();
        }, 3000);
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
                // <BookCard
                //   key={`key-${books.etag}`}
                //   title={books.volumeInfo.title}
                //   author={books.volumeInfo.authors[0]}
                //   publisher={books.volumeInfo.publisher}
                //   thumbnail={books.volumeInfo.imageLinks.thumbnail}
                // />
                <BookCard
                  key={`key-${books.etag}` !== undefined ? `key-${books.etag}` : ''}
                  title={books.volumeInfo.title !== undefined ? books.volumeInfo.title : ''}
                  author={books.volumeInfo.authors !== undefined ? books.volumeInfo.authors[0] : ''}
                  publisher={books.volumeInfo.publisher !== undefined ? books.volumeInfo.publisher : ''}
                  thumbnail={books.volumeInfo.imageLinks !== undefined ? books.volumeInfo.imageLinks.thumbnail : ''}
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
        </div>
      </section>
    );
  }
}


export default BookShelf;
