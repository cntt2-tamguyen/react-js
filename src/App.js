import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';

function NumberOne(props){
  return (
    <div className="col-6">
      <div className="card">
        <image className="card-img-top" src={props.linkanh} alt=""/>
        <div>
          <h4 className="card-title">{props.tieude}</h4>
          <p className="card-text">Text</p>
        </div>
      </div>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
      <div className="container">
        <div className="row">
          <NumberOne tieude="san pham 1" linkanh="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4PuS9SBFBVkLGJam0-CuSlu2S2BOPTkYIGfeIPnAK-eZ-oh6u"/>
          <NumberOne tieude="san pham 2" linkanh="https://trithucvn.net/wp-content/uploads/2018/03/hoa-hong.jpeg"/>
        </div>
      </div>
    </div>
  );
}

export default App;
