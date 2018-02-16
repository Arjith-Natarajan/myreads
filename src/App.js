import React, {Component} from "react";
import "./App.css";
import {Route} from "react-router-dom";
import ListShelves from "./ListShelves"
import SearchBooks from "./SearchBooks"
import * as BooksAPI from "./utils/BooksAPI";

class App extends Component {
  state = {
    books: []
  };

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({books});
      console.dir(books);
    });
  }

  render() {
    return (<div className="app">
      <Route exact="exact" path="/" render={() => <ListShelves books={this.state.books}/>}/>
      <Route path="/search" render={({history}) => (<SearchBooks books={this.state.books} />)}/>
    </div>);
  }
}

export default App;
