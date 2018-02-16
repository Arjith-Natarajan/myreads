import React, {Component} from "react";
import {Link} from "react-router-dom";
import * as BooksAPI from "./utils/BooksAPI";

class ListShelves extends Component {

  updateShelf(currentBook) {
    console.log('shelfupdatehandle clicked');
    // console.log(currentBook.id);
    // BooksAPI.get(currentBook.id).then(bookData => {
    //   console.dir(bookData);
    // });
    BooksAPI.update(currentBook,'wantToRead').then(bookData => {
      console.dir(bookData);
    });
  }
  render() {
    return (<div>
      <Link to="/search">
        <i className="fas fa-plus" style={{
            color: "DarkGray"
          }}/>
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
              }
              {book.shelf ? ( <h5>{book.shelf}</h5>) : (<h5>None</h5>)}

              <button onClick={() => this.updateShelf(book)}>Shelf Status</button>

            </li>))
          }
        </ol>
      </div>
    </div>);
  }
}

export default ListShelves;
