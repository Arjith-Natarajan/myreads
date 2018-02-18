import React, { Component } from "react";
import { search } from "./utils/BooksAPI";

class SearchBooks extends Component {
  state = {
    searchResults: []
  };
  componentDidMount() {
    // hardcoded search query string from SEARCH_TERMS.md
    search("React").then(searchResults => {
      this.setState({ searchResults });
      console.dir(searchResults); // to analyse what is being returned in result
    });
  }

  render() {
    return (
      <div>
        {/* {console.log('hello',this.state.searchResults)} */}
        <h2>Hello World Searches</h2>
        <div className="booksList">
          <ol>
            {this.state.searchResults.map(book => (
              <li key={book.id}>
                <img src={book.imageLinks.smallThumbnail} alt="" />
                <h3>{book.title}</h3>
                {/*// NOTE:  not all objects received have author property
              // this needs to be handled properly to render
            // Conditional Operator too render the book author */}
                <h5>{book.authors ? book.authors[0] : book.publisher}</h5>

                <button onClick={() => this.updateShelf(book)}>
                  Shelf Status
                </button>
              </li>
            ))}
          </ol>
        </div>
        {/* <ListShelves books={this.state.searchResults}/> */}
      </div>
    );
  }
}

export default SearchBooks;
