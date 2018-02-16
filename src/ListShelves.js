import React, {Component} from "react";
import {Link} from "react-router-dom";
import * as BooksAPI from "./utils/BooksAPI";

class ListShelves extends Component {
  shelfChangeHandler(currentBook, event) {
    console.log("shelfupdatehandle clicked ", event.target.value);
    console.dir(currentBook);
    BooksAPI.update(currentBook, event.target.value).then(bookData => {
      console.dir(bookData);
    });
  }
  render() {
    return (<div>
      <Link to="/search" className="darkGray">
        <i className="fas fa-plus"/>
      </Link>
      <div className="booksList">
        <ol>
          {
            this.props.books.map(book => (<li key={book.id}>
              <img src={book.imageLinks.smallThumbnail} alt=""/>
              <h3>{book.title}</h3>
              {
                /* <h5>{book.authors[0]}</h5>
            // NOTE:  not all objects received have author property
            // this needs to be handled properly to render
            */

                <h5>{book.shelf}</h5>
              }
              <div>
                <select value={book.shelf} onChange={e => this.shelfChangeHandler(book, e)}>
                  <option value="none" disabled="disabled">
                    Move to...
                  </option>
                  <option value="currentlyReading">Currently Reading</option>
                  <option value="wantToRead">Want to Read</option>
                  <option value="read">Read</option>
                  <option value="none">None</option>
                </select>
              </div>
              {/* <button onClick={() => this.shelfChangeHandler(book)}>
                Shelf Status
              </button> */
              }
            </li>))
          }
        </ol>
      </div>
    </div>);
  }
}

export default ListShelves;
