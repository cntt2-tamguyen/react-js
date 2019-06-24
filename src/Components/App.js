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
      data:[],
      searchText:'',
      editUserStatus:false,
      userEditOject: []
    }
  }
  
  componentWillMount() {
    //kiem  tra xem co localStorage chay chua
    if (localStorage.getItem('userData') == null){
      localStorage.setItem('userData',JSON.stringify(DataUser));
    }else{
      var temp = JSON.parse(localStorage.getItem('userData'));
      this.setState({
        data:temp
      });
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

  getNewUserData = (name,phone,permission) => {
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
    localStorage.setItem('userData',JSON.stringify(items));
  }

  editUser = (user) => {
    var temp = {};
    temp=user;
    this.setState({
      userEditOject:temp
    });
  }
  
  changeEditUserStatus = () => {
    this.setState({
      editUserStatus : !this.state.editUserStatus
    });
  }

  getEditUserInfoApp = (info) => {
    this.state.data.forEach((value,key)=>{
      if(value.id===info.id){
        value.name=info.name;
        value.phone=info.phone;
        value.permission=info.permission;
      }
    })
    localStorage.setItem('userData',JSON.stringify(this.state.data));
    
  }

  deleteUser = (idUser) => {
    var temp = this.state.data.filter(item => item.id !== idUser);
    this.setState({
      data:temp
    });
    //day vao du lieu
    localStorage.setItem('userData',JSON.stringify(temp));
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
              hienThiForm={this.state.hienThiForm}
              editUserStatus={this.state.editUserStatus}
              changeEditUserStatus={()=>this.changeEditUserStatus()}
              userEditOject={this.state.userEditOject}
              getEditUserInfoApp = {(info)=>this.getEditUserInfoApp(info)}/>
            <TableData 
              dataUserProps={ketQua} 
              editFun={(user)=>this.editUser(user)}
              changeEditUserStatus={()=>this.changeEditUserStatus()}
              deleteUser={(idUser)=>this.deleteUser(idUser)}/>
            <AddUser 
              hienThiForm={this.state.hienThiForm} 
              add={(name,phone,permission)=>this.getNewUserData(name,phone,permission)}/>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default App;
