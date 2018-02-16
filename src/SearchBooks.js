import React, {Component} from "react";
import {search} from "./utils/BooksAPI";
import ListShelves from "./ListShelves";

class SearchBooks extends Component {
  state = {
    searchResults: []
  };
  componentDidMount() {
    // hardcoded search quer string from SEARCH_TERMS.md
    search("Android").then(searchResults => {
      this.setState({searchResults});
      console.dir(searchResults); // to analyse what is being returned in result
    });
  }

  render() {
    return (<div>
      {/* {console.log('hello',this.state.searchResults)} */}
      <h2>Hello World Searches</h2>
      <div className="booksList">
        <ol>
          {
            this.state.searchResults.map(book => (<li key={book.id}>
              <img src={book.imageLinks.smallThumbnail} alt=""/>
              <h3>{book.title}</h3>
              {
            /* <h5>{book.authors[0]}</h5>
            // NOTE:  not all objects received have author property
            // this needs to be handled properly to render
            */
              }
              {book.shelf ? (
       <h5>{book.shelf}</h5>
     ) : (
    <h5>None</h5>
     )}

              <button onClick={() => this.updateShelf(book)}>Shelf Status</button>

            </li>))
          }
        </ol>
      </div>
      {/* <ListShelves books={this.state.searchResults}/> */}
    </div>
  );
  }
}

export default SearchBooks;
