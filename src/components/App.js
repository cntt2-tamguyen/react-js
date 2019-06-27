import React, { Component } from 'react';
import './../App.css';
import Nav from './Nav';
import NoteList from './NoteList';
import NoteForm from './NoteForm';
import {noteData} from './firebaseConnect'
import {connect} from 'react-redux';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  showForm   = () => {
    if(this.props.isEdit)
    {
      return <NoteForm/>
    }
  }
 
  addData  = (item) => {
    noteData.push(item);
  }

  render() {
     return (
      <div>
      <Nav/>
      <div className="container">
        <div className="row">
          <NoteList/>
          {this.showForm()}
        </div>
      </div>
    </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    isEdit: state.isEdit
  }
}
export default connect(mapStateToProps)(App)