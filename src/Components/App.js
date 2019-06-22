import React,{Component} from 'react';
import './../App.css';
import Header from './Header.js'
import Search from './Search.js'
import TableData from './TableData.js'
import AddUser from './AddUser.js'

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header/>
      <div className="search-form">
        <div className="container">
          <div className="row">
            <Search/>
            <TableData/>
            <AddUser/>
          </div>
        </div>
      </div>

      
      
    </div>
    );
  }
}

export default App;
