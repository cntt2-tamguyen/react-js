import React,{Component} from 'react';
import './../App.css';
import Header from './Header.js'
import Search from './Search.js'
import TableData from './TableData.js'
import AddUser from './AddUser.js'
import DataUser from './DataUser.json'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hienThiForm : false,
      data:DataUser,
      searchText:''
    }
  }
  
  doiTrangThai = () => {
    this.setState({
       hienThiForm : !this.state.hienThiForm
    });
  }

  getTextSearch = (dl) => {
    this.setState({
      searchText:dl
    })
  }

  render() {
    var ketQua=[];
    this.state.data.forEach((item) => {
      if (item.name.indexOf(this.state.searchText) !== -1) {
       ketQua.push(item);
      }
    });
    console.log(ketQua);
    return (
      <div className="App">
      <Header/>
      <div className="search-form">
        <div className="container">
          <div className="row">
            <Search
              checkConnectProps={(dl)=>this.getTextSearch(dl)}
              ketNoi={()=>this.doiTrangThai()} hienThiForm={this.state.hienThiForm}/>
            <TableData dataUserProps={this.state.data}/>
            <AddUser hienThiForm={this.state.hienThiForm}/>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default App;
