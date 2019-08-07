import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { tsImportEqualsDeclaration } from '@babel/types';

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
        <Person name={this.state.name} age={this.props.age} />
      </div>
    )
  }
}

export default App;
