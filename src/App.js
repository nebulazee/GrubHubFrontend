import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import Main from './Components/Main'
/* import 'bootstrap/dist/css/bootstrap.min.css'; */
class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Navbaar/>
        <Login/>
        <Test/> */}
        <BrowserRouter>
          <Main/>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
