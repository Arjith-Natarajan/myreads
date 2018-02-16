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

  // if both key and value of the object passed to setState is same,
  // then it can be replaced by a single var name
  componentDidMount() {
    // makes the API call to fetch the list of books
    BooksAPI.getAll().then(books => {
      this.setState({books});
      console.dir(books); // to analyse the structure of the objs in array
    });
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

      <Route exact path="/" render={() => <ListShelves books={this.state.books}/>}/>
      <Route path="/search" render={({history}) => <SearchBooks mybooksList={this.state.books}/>}/>
    </div>);
  }
}

export default App;
