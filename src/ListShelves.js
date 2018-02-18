import React, {Component} from "react";

class ListShelves extends Component {

  render() {
    const {onShelfChange, books} = this.props;

    return (<div>
      <BookSections onShelfChange={onShelfChange} books={books.filter(b => b.shelf === 'currentlyReading')} shelfName="Currently Reading"/>
      <BookSections onShelfChange={onShelfChange} books={books.filter(b => b.shelf === 'wantToRead')} shelfName="Want to Read"/>
      <BookSections onShelfChange={onShelfChange} books={books.filter(b => b.shelf === 'read')} shelfName="Read"/>
    </div>);
  }
}

const BookSections = ({onShelfChange,books, shelfName}) => (<div>
  <h2>{shelfName}</h2>
  { books.length === 0 ?(<h4>Loading ...</h4>):(<div className="booksList">
    <ol>
      {
        books.map(book => (<li key={book.id}>
          <img src={book.imageLinks.smallThumbnail} alt=""/>
          <h3>{book.title}</h3>
          {/*// NOTE:  not all objects received have author property
        // this needs to be handled properly to render
      // Conditional Operator too render the book author */}
          <h5>{book.authors ? book.authors[0] : book.publisher}</h5>

          <div>
            <select value={book.shelf} onChange={(e) => onShelfChange(book, e)}>
              <option value="none" disabled="disabled">
                Move to...
              </option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </li>))
      }
    </ol>
  </div>)}
</div>);

export default ListShelves;
