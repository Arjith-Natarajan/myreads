import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (<div className="app">
      <h1>
        <i class="far fa-sun fa-pulse"
          // data-fa-transform="down-3"
          style={{
            fontSize: '2em',
            paddingLeft: '10px',
            paddingRight: '10px',
            position: 'relative',
            top: '10px',
            color: 'Tomato'
          }}></i>
        Good Morning Reeds
        <i class="fas fa-book" style={{
            color: 'ForestGreen'
          }}></i>!
      </h1>
    </div>);
  }
}

export default App;
