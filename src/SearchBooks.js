import React, { Component } from "react";
import { search } from "./utils/BooksAPI";
import { Link } from "react-router-dom";
import BrandBar from "./BrandBar";
import sortBy from "sort-by";

class SearchBooks extends Component {
  state = {
    searchResults: [],
    query: ""
  };

  queryUpdateHandler = newQuery => {
    this.setState({ query: newQuery });
    if (newQuery.length === 0) {
      this.setState({ searchResults: [] });
    } else {
      search(newQuery)
        .then(searchResponse => {
          const items = searchResponse.error ? [] : searchResponse;
          this.setState({ searchResults: items });
        });
    }
  };
  render() {
    const { onShelfChange, mybooksList } = this.props;
    const { searchResults, query } = this.state;

    // mapping over searchResults to update shelf status
    const processedBooks = searchResults.map(book => {
      const found = mybooksList.find(myBook => myBook.id === book.id);
      book.shelf = found ? found.shelf : "none";
      return book;
    });
    processedBooks.sort(sortBy("title"));

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/">
            <p className="close-search">Close</p>
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              value={query}
              placeholder="Search by titles or categories"
              onChange={event => this.queryUpdateHandler(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          {processedBooks.length > 0 ? (
            <ol className="books-grid">
              {processedBooks.map(book => {
                const coverImgURL = book.imageLinks
                  ? book.imageLinks.smallThumbnail
                  : "http://via.placeholder.com/128x190";

                return (
                  <li key={book.id}>
                    <div className="book">
                      <div className="book-top">
                        <img className="book-cover" src={coverImgURL} alt="" />
                        <div className="book-shelf-changer">
                          <select
                            value={book.shelf}
                            onChange={e => onShelfChange(book, e)}
                          >
                            <option value="none" disabled="disabled">
                              Move to...
                            </option>
                            <option value="currentlyReading">
                              Currently Reading
                            </option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                          </select>
                        </div>
                      </div>
                      <div className="book-title">{book.title}</div>
                      <div className="book-authors">
                        {book.authors ? book.authors.join(', ') : book.publisher}
                      </div>
                    </div>
                  </li>
                );
              })}
            </ol>
          ) : (
            <div>
              <div className="no-results">
                No results to show, try some other keywords
              </div>
            </div>
          )}
        </div>
        <div className="footer">
          <BrandBar />
        </div>
      </div>
    );
  }
}

export default SearchBooks;
