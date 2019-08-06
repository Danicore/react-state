import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    persons: [
      {name: "Ali", age: 26},
      {name: "Ahmed", age: 24},
      {name: "Bilal", age: 22}
    ]
  }

  render() {
    return (
      <div className="App">
        {this.state.name}
      </div>
    )
  }
}

export default App;
