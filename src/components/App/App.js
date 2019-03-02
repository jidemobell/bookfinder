import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSpinner } from '@fortawesome/free-solid-svg-icons';

import '../../stylesheets/main.scss';

import SearchBar from '../../container/SearchForm/SearchBar';
import BookShelf from '../../container/BookShelf/BookShelf';

class App extends React.Component {
  componentDidUpdate(prevProps, prevState, snapshot) {
    const { actions, booksArray } = this.props;
    if (this.props !== prevProps) {
      if (booksArray !== undefined) {
        actions.passLoaded();
      }
    }
  }

  render() {
    const { booksArray, loaded } = this.props;
    return (
      <div className="main">
        <h2
          style={
            { display: "flex",
              alignItems: "center ",
              justifyContent: "center",
              marginBottom: "30px",
              marginTop: "50px" }}
        >
            BOOK FINDER
        </h2>
        <section className="form">
          <SearchBar />
        </section>
        <section className="book-box" style={{ marginTop: "50px" }}>
          <BookShelf />
        </section>
      </div>
    );
  }
}


export default App;
