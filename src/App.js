import React, {Component} from "react";
import {Route, Link} from "react-router-dom";
import "./App.css";
import ListShelves from "./ListShelves";
import SearchBooks from "./SearchBooks";
import * as BooksAPI from "./utils/BooksAPI";

// top-level class component that renders any
// one of the child component based on path/URL
class App extends Component {
  state = {
    books: []
  };

  filterBookByShelf = (books, shelfName) => books.filter(b => b.shelf === shelfName);
  shelfChangeHandler = (currentBook, event) => {
    // update shelf attribute of current option based on event
    currentBook.shelf = event.target.value;

    // remove the already existing obj in state
    let updatedState = this.state.books.filter(function(el) {
      return el.id !== currentBook.id;
    });
    // add the updated obj -> state
    updatedState.push(currentBook);

    //update current State to reflect without API call
    this.setState({books: updatedState});

    // Make API call to persist the change in state
    BooksAPI.update(currentBook, event.target.value).then(bookData => {
      console.log("Updated book shelf status", bookData); // obj returned with each of shelf values
    });
  };

  fetchBooksList() {
    // makes the API call to fetch the list of books
    BooksAPI.getAll().then(books => {
      this.setState({books}); // and to update the State
    });
  }

  // if both key and value of the object passed to setState is same,
  // then it can be replaced by a single var name
  componentDidMount() {
    this.fetchBooksList(); // moved API call to a separate function
  }

  render() {
    return (<div className="app">
      <div className="list-books">
        <div className="list-books-title">
          <h1>
            <Link to="/">
              <i className="far fa-sun fa-pulse"
                // data-fa-transform="down-3"
                style={{
                  fontSize: "2em",
                  paddingLeft: "10px",
                  paddingRight: "10px",
                  position: "relative",
                  top: "10px",
                  color: "Tomato"
                }}/>
            </Link>
            Good Morning
            <i className="fas fa-book" style={{
                color: "ForestGreen"
              }}/>Reeds!
          </h1>
        </div>
        <Route exact path="/" render={() => (<Link to="/search">
            <div className="open-search">
              <a href="#">Add some Books</a>
            </div>
          </Link>)}/>
        <Route exact path="/" render={() => (<ListShelves onShelfChange={this.shelfChangeHandler} books={this.state.books}/>)}/></div>{" "}
      <Route path="/search" render={({history}) => (<SearchBooks onShelfChange={this.shelfChangeHandler} mybooksList={this.state.books}/>)}/>
    </div>);
  }
}

export default App;
