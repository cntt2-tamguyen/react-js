import React,{Component} from 'react';
import './../App.css';
import Nav from './Nav';
import NoteForm from './NoteForm';
import NoteList from './NoteList';

class App extends Component {
  render() {
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