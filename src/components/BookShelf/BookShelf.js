import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

// import '../../stylesheets/main.scss';

// import SearchBar from '../../container/SearchForm/SearchBar';
import BookCard from '../../container/BookCard/BookCard';

// const Spinner = <FontAwesomeIcon icon={faSpinner} />;

class BookShelf extends React.Component {
  componentWillReceiveProps(nextProps) {
    const { actions } = this.props;
    // this.setState({ loading: true });
    if (nextProps !== this.props) {
      console.log('nextProps', nextProps.formsEntry.books);
      if (nextProps.formsEntry.books !== undefined && nextProps.formsEntry.books.length > 0) {
        actions.getBooks(nextProps.formsEntry.books);
        actions.removeIndex();
      }
    }
  }
  // componentDidUpdate(prevProps) {

  // }

  render() {
    const { booksArray, loaded } = this.props;
    const textArray = [
      {
        id: 'AW1',
        title: 'The Extraordinary Journey of Harry Forth',
        author: 'James Maden',
        publisher: 'AuthorHouse',
        thumbnail: 'http://books.google.com/books/content?id=UukZBgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
      },
      {
        id: 'AW2',
        title: 'The Extraordinary Journey of Harry Forth',
        author: 'James Maden',
        publisher: 'AuthorHouse',
        thumbnail: 'http://books.google.com/books/content?id=UukZBgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
      },
      {
        id: 'AW3',
        title: 'The Extraordinary Journey of Harry Forth',
        author: 'James Maden',
        publisher: 'AuthorHouse',
        thumbnail: 'http://books.google.com/books/content?id=UukZBgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
      },
      {
        id: 'AW4',
        title: 'The Extraordinary Journey of Harry Forth',
        author: 'James Maden',
        publisher: 'AuthorHouse',
        thumbnail: 'http://books.google.com/books/content?id=UukZBgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
      },
      {
        id: 'AW5',
        title: 'The Extraordinary Journey of Harry Forth',
        author: 'James Maden',
        publisher: 'AuthorHouse',
        thumbnail: 'http://books.google.com/books/content?id=UukZBgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
      },
      {
        id: 'AW6',
        title: 'The Extraordinary Journey of Harry Forth',
        author: 'James Maden',
        publisher: 'AuthorHouse',
        thumbnail: 'http://books.google.com/books/content?id=UukZBgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
      },
      {
        id: 'AW7',
        title: 'The Extraordinary Journey of Harry Forth',
        author: 'James Maden',
        publisher: 'AuthorHouse',
        thumbnail: 'http://books.google.com/books/content?id=UukZBgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
      },
      {
        id: 'AW8',
        title: 'The Extraordinary Journey of Harry Forth',
        author: 'James Maden',
        publisher: 'AuthorHouse',
        thumbnail: 'http://books.google.com/books/content?id=UukZBgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
      },
      {
        id: 'AW9',
        title: 'The Extraordinary Journey of Harry Forth',
        author: 'James Maden',
        publisher: 'AuthorHouse',
        thumbnail: 'http://books.google.com/books/content?id=UukZBgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
      },
      {
        id: 'AW10',
        title: 'The Extraordinary Journey of Harry Forth',
        author: 'James Maden',
        publisher: 'AuthorHouse',
        thumbnail: 'http://books.google.com/books/content?id=UukZBgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
      },
      {
        id: 'AW11',
        title: 'The Extraordinary Journey of Harry Forth',
        author: 'James Maden',
        publisher: 'AuthorHouse',
        thumbnail: 'http://books.google.com/books/content?id=UukZBgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
      },
      {
        id: 'AW12',
        title: 'The Extraordinary Journey of Harry Forth',
        author: 'James Maden',
        publisher: 'AuthorHouse',
        thumbnail: 'http://books.google.com/books/content?id=UukZBgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
      },
    ];
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
              // Array.isArray(textArray) && textArray.map((books) => {
              //   return (
              //     <BookCard
              //       key={`key-${books.id}`}
              //       title={books.title}
              //       author={books.author}
              //       publisher={books.publisher}
              //       thumbnail={books.thumbnail}
              //     />
              //   );
              // })
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
