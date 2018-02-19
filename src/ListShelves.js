import React, { Component } from "react";
import { Link } from "react-router-dom";
import BrandBar from "./BrandBar";

class ListShelves extends Component {
  render() {
    const { onShelfChange, books } = this.props;

    return (
      <div className="list-books">
        <BrandBar />
        <div className="list-books-content">
          <BookSections
            onShelfChange={onShelfChange}
            books={books.filter(b => b.shelf === "currentlyReading")}
            shelfName="Currently Reading"
          />
          <BookSections
            onShelfChange={onShelfChange}
            books={books.filter(b => b.shelf === "wantToRead")}
            shelfName="Want to Read"
          />
          <BookSections
            onShelfChange={onShelfChange}
            books={books.filter(b => b.shelf === "read")}
            shelfName="Read"
          />
          <Link to="/search">
            <div className="open-search">
              <p>Add some Books</p>
            </div>
          </Link>
        </div>
      </div>
    );
  }
}

const BookSections = ({ onShelfChange, books, shelfName }) => (
  <div className="bookshelf">
    <h2 className="bookshelf-title">
      {shelfName} - <span style={{ color: "Tomato" }}>({books.length})</span>
    </h2>
    {books.length === 0 ? (
      <div className="no-results">Nothing to show</div>
    ) : (
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map(book => (
            <li key={book.id}>
              <div className="book">
                <div className="book-top">
                  <img
                    className="book-cover"
                    src={book.imageLinks.smallThumbnail}
                    alt=""
                  />
                  <div className="book-shelf-changer">
                    <select
                      value={book.shelf}
                      onChange={e => onShelfChange(book, e)}
                    >
                      <option value="none" disabled="disabled">
                        Move to...
                      </option>
                      <option value="currentlyReading">
                        Currently Reading
                      </option>
                      <option value="wantToRead">Want to Read</option>
                      <option value="read">Read</option>
                      <option value="none">None</option>
                    </select>
                  </div>
                </div>
                <div className="book-title">{book.title}</div>
                {/*// NOTE:  not all objects received have author property
        // this needs to be handled properly to render
      // Conditional Operator too render the book author */}
                <div className="book-authors">
                  {book.authors ? book.authors[0] : book.publisher}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    )}
  </div>
);

export default ListShelves;
