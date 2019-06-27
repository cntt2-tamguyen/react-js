import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { firebaseConnect } from './firebaseConnect';
import * as  firebase from 'firebase'

class App extends Component {
 
  pushData  = () => {
    var connectData = firebase.database().ref('dataForNote');
    connectData.push({
      titleNote:'Tiêu đề ghi chú số 3',
      contentNote:'Nội dung ghi chú số 3'
    })
  }
  render() {
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
        <button onClick={() =>this.pushData()}>Click</button>
      </div>
    );
  }
}

export default App;
