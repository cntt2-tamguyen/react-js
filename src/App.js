import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';

function One (){
  return (
    <div>
      <h2>so 1 tap 1</h2>
      <h3>so 1 tap 2</h3>
    </div>
  );
}

var Two = function(){
  return(
    <div>
      <h3>Cach so 2</h3>
    </div>
  )
}

var Three =() =>( 
  <div>
    <h3>Cach so 3</h3>
  </div>
);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <One/>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Two/>
      <Three/>
    </div>
  );
}

export default App;
