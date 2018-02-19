import React from "react";
import { Link } from "react-router-dom";

const BrandBar = () => (
  <div className="list-books-title">
    <h1>
      <Link to="/">
        <i
          className="far fa-sun fa-pulse"
          // data-fa-transform="down-3"
          style={{
            fontSize: "2em",
            paddingLeft: "10px",
            paddingRight: "10px",
            position: "relative",
            top: "10px",
            color: "Tomato"
          }}
        />
      </Link>
      Good Morning &nbsp;
      <i
        className="fas fa-book"
        style={{
          backgroundColor: "Black",
          color: "ForestGreen",
          borderRadius: "5px"
        }}
      />{" "}
      Reeds!
    </h1>
    <h5>
      <a
        className="links"
        href="https://in.udacity.com/course/react-nanodegree--nd019"
      >
        Powered by Udacity
      </a>{" "}
      &copy;{" "}
      <a href="https://github.com/Arjith-Natarajan" className="links">
        Arjith Natarajan
      </a>{" "}
      2018
    </h5>
  </div>
);

export default BrandBar;
