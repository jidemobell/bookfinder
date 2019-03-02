import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

import BookCard from '../../container/BookCard/BookCard';

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
      <section className="book-box" style={{ marginTop: "50px" }}>
        <div className="books">
          {
              loaded ? <FontAwesomeIcon icon={faSpinner} />
                : Array.isArray(booksArray) && booksArray.map((books) => {
                  return (
                    <BookCard
                      key={`key-${books.etag}`}
                      title={books.volumeInfo.title}
                      author={books.volumeInfo.authors[0]}
                      publisher={books.volumeInfo.publisher}
                      thumbnail={books.volumeInfo.imageLinks.thumbnail}
                    />
                  );
                })
            }
          {
              booksArray === undefined && (
              <div className="initial-message"> <p>Nothing Here Yet - Try Searching For A Book!</p> </div>
              )
            }
        </div>
      </section>
    );
  }
}


export default BookShelf;
