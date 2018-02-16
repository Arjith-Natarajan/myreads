import React, {Component} from "react";
import {search} from "./utils/BooksAPI";
import ListShelves from "./ListShelves";

class SearchBooks extends Component {
  state = {
    searchResults: []
  };
  componentDidMount() {
    // hardcoded search quer string from SEARCH_TERMS.md
    search("Android").then(results => {
      // this.setState({searchResults});
      this.setState(() => ({searchResults: results}));
      // this.setState({books});
      console.log('kol',results); // to analyse what is being returned in result
    });
  }

  render() {
    return (<div>
      {/* {console.log('hello',this.state.searchResults)} */}
      <h2>Hello World Searches</h2>
      {/* <div className="booksList">
        <ol>
          {
          this.state.searchResults.map(book => (<li key={book.id}>
              <img src={book.imageLinks.smallThumbnail} alt=""/>
              <h3>{book.title}</h3>
              <h5>{book.authors[0]}</h5>
            </li>))
          }
        </ol>
      </div> */}
      <ListShelves books={this.state.searchResults}/>
    </div>
  );
  }
}

export default SearchBooks;
