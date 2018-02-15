import React, {Component} from 'react';
import './App.css';
import * as BooksAPI from "./utils/BooksAPI";

class App extends Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({books})
      console.dir(books);
    })
  }

  render() {
    return (<div className="app">
      <h1>
        <i className="far fa-sun fa-pulse"
          // data-fa-transform="down-3"
          style={{
            fontSize: '2em',
            paddingLeft: '10px',
            paddingRight: '10px',
            position: 'relative',
            top: '10px',
            color: 'Tomato'
          }}></i>
        Good Morning <i className="fas fa-book" style={{
            color: 'ForestGreen'
          }}></i>Reeds!
      </h1>
      <div className="booksList">
        <ol>{
            this.state.books.map(book => (<li key={book.id}>
              <img src={book.imageLinks.smallThumbnail} alt=""/>
              <h3>{book.title}</h3>
              <h5>{book.authors[0]}</h5>
            </li>))
          }</ol>
      </div>
    </div>);
  }
}

export default App;
