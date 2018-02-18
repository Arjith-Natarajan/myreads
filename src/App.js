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
    books: [],
    reading:[],
    willRead:[],
    read:[]
  };

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
      console.log('Updated book shelf status', bookData); // obj returned with each of shelf values
    });
  };

  filterBookByShelf = (books, shelfName) => books.filter( b =>  b.shelf === shelfName)

  fetchBooksList() {
    // makes the API call to fetch the list of books
    BooksAPI.getAll().then(books => {
      const reading = this.filterBookByShelf(books,'currentlyReading');
      const willRead = this.filterBookByShelf(books, 'wantToRead');
      const read= this.filterBookByShelf(books,'read');

      this.setState({books,reading, willRead, read}); // and to update the State
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
      <Route exact path="/" render={() => (<BookSections onShelfChange={this.shelfChangeHandler} reading={this.state.reading} willRead={this.state.willRead}  read={this.state.read}/>)}/>
      {/* <Route exact path="/" render={() => (<ListShelves onShelfChange={this.shelfChangeHandler} books={this.state.books}/>)}/> */}
      <Route path="/search" render={({history}) => (<SearchBooks onShelfChange={this.shelfChangeHandler} mybooksList={this.state.books}/>)}/>
    </div>);
  }
}
const BookSections = ({onShelfChange,reading, willRead, read}) => (<div>
  <Link to="/search" className="darkGray">
    <i className="fas fa-plus"/>
  </Link>
  {console.log('hey',reading) }
  <ListShelves onShelfChange={onShelfChange} books={reading} shelfName="Currently Reading"/>
  <ListShelves onShelfChange={onShelfChange} books={willRead} shelfName="Want to Read"/>
  <ListShelves onShelfChange={onShelfChange} books={read} shelfName="Read"/>
</div>);

export default App;
