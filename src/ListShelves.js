import React, {Component} from "react";
import {Link} from "react-router-dom";
function ListShelves(props) {
  return (<div>
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
    <Link to="/search">
      <i className="fas fa-plus" style={{
          color: "SeaBlue"
        }}/>
    </Link>
    <div className="booksList">
      <ol>
        {
          props.books.map(book => (<li key={book.id}>
            <img src={book.imageLinks.smallThumbnail} alt=""/>
            <h3>{book.title}</h3>
            {/* <h5>{book.authors[0]}</h5>
            // NOTE:  not all objects received have author property
            // this needs to be handled properly to render 
            */}

          </li>))
        }
      </ol>
    </div>
  </div>);
}

export default ListShelves;
