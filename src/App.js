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

  // removeContact = contact => {
  //   this.setState(state => ({
  //     contacts: state.contacts.filter(c => c.id !== contact.id)
  //   }));
  //   ContactsAPI.remove(contact);
  // };

  shelfChangeHandler= (currentBook, event) => {
    console.log("shelfupdatehandle clicked ", event.target.value);
    currentBook.shelf = event.target.value;
    console.dir(currentBook);
    let updatedState =this.state.books.filter( b =>  b.id !== currentBook.id);
    BooksAPI.update(currentBook, event.target.value).then(bookData => {
      console.dir(bookData);
      this.fetchBooksList();
    });
  };

  fetchBooksList(){
    // makes the API call to fetch the list of books
    BooksAPI.getAll().then(books => {
      this.setState({books}); // and to update the State
      console.dir(books); // to analyse the structure of the objs in array
    });
  }

  // if both key and value of the object passed to setState is same,
  // then it can be replaced by a single var name
  componentDidMount() {
      this.fetchBooksList(); // moved API call to a separate function
  }

  render() {
    return (<div className="app">
      {" "}
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
        </Link>{" "}
        Good Morning{" "}
        <i className="fas fa-book" style={{
            color: "ForestGreen"
          }}/>Reeds!
      </h1>

      <Route exact path="/" render={() => <ListShelves onShelfChange={this.shelfChangeHandler} books={this.state.books}/>}/>
      <Route path="/search" render={({history}) => <SearchBooks mybooksList={this.state.books}/>}/>
    </div>);
  }
}

export default App;
