import React, { Component } from "react";
import { search } from "./utils/BooksAPI";

class SearchBooks extends Component {
  state = {
    searchResults: [],
    query : ""
  };

  querySubmitHandler = event => {
    search(this.state.query).then(searchResults => {
      this.setState({ searchResults });
      console.dir(searchResults); // to analyse what is being returned in result
    });
    event.preventDefault();
  };
  queryUpdateHandler = newQuery => {
    this.setState({
      query: newQuery.trim()
    });
  };
  componentDidMount() {

  }

  render() {
    const { onShelfChange, mybooksList } = this.props;
    const { searchResults, query } = this.state;

    // mapping over searchResults to update shelf status
    const processedBooks = searchResults.map(book => {
      const found = mybooksList.find(myBook => myBook.id === book.id);
      book.shelf = found ? found.shelf : "none";
      return book;
    });

    return (
      <div>
        <h2>Search:</h2>
        <form onSubmit={this.querySubmitHandler}>
        <label>
          <input type="text" value={this.state.query}  onChange={event => this.queryUpdateHandler(event.target.value)} />
        </label>
        <input type="submit" value="Submit" />
      </form>
        <div className="booksList">
        { processedBooks.length >0 ? (  
          <ol>
            {processedBooks.map(book => (
              <li key={book.id}>
                <img src={book.imageLinks.smallThumbnail} alt="" />
                <h3>{book.title}</h3>
                {/*// NOTE:  not all objects received have author property
              // this needs to be handled properly to render
            // Conditional Operator too render the book author */}
                <h5>{book.authors ? book.authors[0] : book.publisher}</h5>
                <div>
                  <select
                    value={book.shelf}
                    onChange={e => onShelfChange(book, e)}
                  >
                    <option value="none" disabled="disabled">
                      Move to...
                    </option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                  </select>
                </div>
              </li>
            ))}
          </ol>
        ) : (
          <div>
            <h1>Type to search, try some other keywords</h1>
          </div>
        )}
        </div>
      </div>
    );
  }
}

export default SearchBooks;
