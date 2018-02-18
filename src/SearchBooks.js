import React, {Component} from "react";
import {search} from "./utils/BooksAPI";
import {Link} from "react-router-dom";
import BrandBar from "./BrandBar";
import sortBy from "sort-by";
import "./App.css";

class SearchBooks extends Component {
  state = {
    searchResults: [],
    query: ""
  };

  querySubmitHandler = event => {
    search(this.state.query).then(searchResults => {
      this.setState({searchResults});
      console.dir(searchResults); // to analyse what is being returned in result
    });
    event.preventDefault();
  };
  queryUpdateHandler = newQuery => {
    this.setState({query: newQuery.trim()});
  };

  render() {
    const {onShelfChange, mybooksList} = this.props;
    const {searchResults, query} = this.state;

    // mapping over searchResults to update shelf status
    const processedBooks = searchResults.map(book => {
      const found = mybooksList.find(myBook => myBook.id === book.id);
      book.shelf = found
        ? found.shelf
        : "none";
      return book;
    });
    console.dir(processedBooks);
    processedBooks.sort(sortBy("title"));
    console.log('sorted', processedBooks);

    return (<div className="search-books">
      <div className="search-books-bar">
        <Link to="/">
          <p className="close-search">Close</p>
        </Link>
        <div className="search-books-input-wrapper">
          <form onSubmit={this.querySubmitHandler}>
            <label>
              <input type="text" value={query} placeholder="Search by titles or categories" onChange={event => this.queryUpdateHandler(event.target.value)}/>
            </label>
          </form>
        </div>
      </div>
      <div className="search-books-results">
        {
          processedBooks.length > 0
            ? (<ol className="books-grid">
              {
                processedBooks.map(book => (<li key={book.id}>
                  <div className="book">
                    <div className="book-top">
                      <img className="book-cover" src={book.imageLinks.smallThumbnail} alt=""/>
                      <div className="book-shelf-changer">
                        <select value={book.shelf} onChange={e => onShelfChange(book, e)}>
                          <option value="none" disabled="disabled">
                            Move to...
                          </option>
                          <option value="currentlyReading">Currently Reading</option>
                          <option value="wantToRead">Want to Read</option>
                          <option value="read">Read</option>
                          <option value="none">None</option>
                        </select>
                      </div>
                    </div>
                    <div className="book-title">{book.title}</div>
                    <div className="book-authors">{
                        book.authors
                          ? book.authors[0]
                          : book.publisher
                      }</div>
                  </div>
                </li>))
              }
            </ol>)
            : (<div>
              <div className="no-results">No results to show, try some other keywords</div>
            </div>)
        }
      </div>
      <div className="footer">
        <BrandBar/>
      </div>
    </div>);
  }
}

export default SearchBooks;
