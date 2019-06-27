import React,{Component} from 'react';
import './../App.css';
import Nav from './Nav';
import NoteForm from './NoteForm';
import NoteList from './NoteList';
import {noteData} from './firebaseConnect'
import * as  firebase from 'firebase'

class App extends Component {
  constructor(props) {
    super(props);
    this.state={}
  }

  addData = (item) => {
    noteData.push(item);
  }
  
  render() {
    console.log(noteData)
    return (
      <div>
        <Nav/>
        <div className="container">
          <div className="row">
              <NoteList/>
              <NoteForm
              getData={(item)=>this.addData(item)}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;