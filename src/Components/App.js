import React,{Component} from 'react';
import './../App.css';
import Header from './Header.js'
import Search from './Search.js'
import TableData from './TableData.js'
import AddUser from './AddUser.js'

function App() {
  return (
    <div className="App">
      <Header/>
      <div class="search-form">
        <div class="container">
          <div class="row">
            <Search/>
            <TableData/>
            <AddUser/>
          </div>
        </div>
      </div>

      
      
    </div>
  );
}

export default App;
