import React,{Component} from 'react';
import './../App.css';
import Header from './Header.js'
import Search from './Search.js'
import TableData from './TableData.js'
import AddUser from './AddUser.js'
import DataUser from './DataUser.json'

const uuidv1=require('uuid/v1')
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

  getUserData = (name,phone,permission) => {
    var item = {};
    item.id = uuidv1();
    item.name = name;
    item.phone = phone;
    item.permission = permission;
    var items = this.state.data;
    items.push(item);
    this.setState({
      data:items
    });
    console.log(item);
  }

  editUser = (user) => {
    alert('da ket noi');
    console.log(user)
  }

  render() {
    var ketQua=[];
    this.state.data.forEach((item) => {
      if (item.name.indexOf(this.state.searchText) !== -1) {
       ketQua.push(item);
      }
    });
    return (
      <div className="App">
      <Header/>
      <div className="search-form">
        <div className="container">
          <div className="row">
            <Search
              checkConnectProps={(dl)=>this.getTextSearch(dl)}
              ketNoi={()=>this.doiTrangThai()} 
              hienThiForm={this.state.hienThiForm}/>
            <TableData 
              dataUserProps={ketQua} 
              editFun={(user)=>this.editUser(user)}/>
            <AddUser 
              hienThiForm={this.state.hienThiForm} 
              add={(name,phone,permission)=>this.getUserData(name,phone,permission)}/>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default App;
