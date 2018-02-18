import React, {Component} from "react";
import {search} from "./utils/BooksAPI";
import {Link} from "react-router-dom";
import BrandBar from "./BrandBar";
import sortBy from "sort-by";
import Autosuggest from 'react-autosuggest';
import searchTerms from "./SearchTerms";

// Teach Autosuggest how to calculate suggestions for any given input value.
const getSuggestions = value => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  return inputLength === 0 ? [] : searchTerms.filter(term =>
    term.name.toLowerCase().slice(0, inputLength) === inputValue
  );
};

// how to calculate the
// input value for every given suggestion.
const getSuggestionValue = suggestion => suggestion.name;

// Use your imagination to render suggestions.
const renderSuggestion = suggestion => (
  <div className="auto-suggest-item" style={{color: 'Tomato', listDecoration: 'none'}}>
    {suggestion.name}
  </div>
);

class SearchBooks extends Component {
  state = {
    searchResults: [],
    query: "",
    suggestions: []
  };

  onSuggestionsFetchRequested = ({ value }) => {
  this.setState({
    suggestions: getSuggestions(value)
  });
};
// Autosuggest will call this function every time you need to clear suggestions.
  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  onSuggestionSelected = (event, { suggestion, suggestionValue, suggestionIndex, sectionIndex, method }) => {
    this.setState({
      query: suggestionValue
    });
    search(suggestionValue).then(searchResults => {
      this.setState({searchResults});
      console.dir(searchResults); // to analyse what is being returned in result
    });
  };

  querySubmitHandler = (event) => {
    search(this.state.query).then(searchResults => {
      this.setState({searchResults});
      console.dir(searchResults); // to analyse what is being returned in result
    });
    event.preventDefault();
  };
  queryUpdateHandler = newQuery => {
    console.log(newQuery);
    this.setState({query: newQuery.trim()});
  };

  render() {
    const {onShelfChange, mybooksList} = this.props;
    const {searchResults, query, suggestions} = this.state;

    // Autosuggest will pass through all these props to the input.
    const inputProps = {
      placeholder: 'Search by titles or categories',
      value :  query,
      onChange: event => this.queryUpdateHandler(event.target.value)
    };

    // mapping over searchResults to update shelf status
    const processedBooks = searchResults.map(book => {
      const found = mybooksList.find(myBook => myBook.id === book.id);
      book.shelf = found
        ? found.shelf
        : "none";
      return book;
    });
    processedBooks.sort(sortBy("title"));

    return (<div className="search-books">
      <div className="search-books-bar">
        <Link to="/">
          <p className="close-search">Close</p>
        </Link>
        <div className="search-books-input-wrapper">
          <form onSubmit={this.querySubmitHandler}>
            <label>
              {/* <input type="text" value={query} placeholder="Search by titles or categories" onChange={event => this.queryUpdateHandler(event.target.value)}/> */}
              <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        onSuggestionSelected={this.onSuggestionSelected}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
      />
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
