import React,{Component} from 'react';
import './../App.css';
import Nav from './Nav';
import NoteForm from './NoteForm';
import NoteList from './NoteList';
import {noteData} from './firebaseConnect'

class App extends Component {
  render() {
    console.log(noteData)
    return (
      <div>
        <Nav/>
        <div className="container">
          <div className="row">
              <NoteList/>
              <NoteForm/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;