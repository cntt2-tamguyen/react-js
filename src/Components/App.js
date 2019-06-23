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
      hienThiForm : true,
      data:DataUser
    }
  }
  
  doiTrangThai = () => {
    this.setState({
       hienThiForm : !this.state.hienThiForm
    });
  }
  // thongBao = () =>{
  //   alert("Kết nối thành công")
  // }

  render() {
    console.log(this.state.data)
    return (
      <div className="App">
      <Header/>
      <div className="search-form">
        <div className="container">
          <div className="row">
            <Search ketNoi={()=>this.doiTrangThai()} hienThiForm={this.state.hienThiForm}/>
            <TableData/>
            <AddUser hienThiForm={this.state.hienThiForm}/>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default App;
