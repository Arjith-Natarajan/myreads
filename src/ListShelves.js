import React, {Component} from "react";

function ListShelves(props) {
  return (<div>
    {" "}
    <h1>
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
      Good Morning{" "}
      <i className="fas fa-book" style={{
          color: "ForestGreen"
        }}/>Reeds!
    </h1>
    <div className="booksList">
      <ol>
        {
          props.books.map(book => (<li key={book.id}>
            <img src={book.imageLinks.smallThumbnail} alt=""/>
            <h3>{book.title}</h3>
            <h5>{book.authors[0]}</h5>
          </li>))
        }
      </ol>
    </div>
  </div>);
}

export default ListShelves;
