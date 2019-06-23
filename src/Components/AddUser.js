import React, { Component } from 'react';

class AddUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id:"",
            name:"",
            phone:"",
            permission:""
        }
    }
    
    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]:value
        });
        //packet to item
        
    }

    kiemTraTrangThai = () => {
        if (this.props.hienThiForm===true) {
            return (
                <div className="col">
                    <form method="post">
                        <div className="card mb-3 mt-2" style={{maxWidth: '18rem'}}>
                            <div className="card-header">Thêm mới user vào hệ thống</div>
                            <div className="card-body">
                                <div className="form-group">
                                    <input type="text" className="form-control" aria-describedby="helpId" placeholder="Tên User" name="name" onChange={(event)=>this.isChange(event)}/>
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" aria-describedby="helpId" placeholder="Điện thoại" name="phone" onChange={(event)=>this.isChange(event)}/>
                                </div>
                                <div className="form-group">
                                    <select className="custom-select" required name="permission" onChange={(event)=>this.isChange(event)}>
                                        <option value>Chọn quyền mặc định</option>
                                        <option value={1}>Admin</option>
                                        <option value={2}>Moderator</option>
                                        <option value={3}>Normal</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <input type="reset" className="btn btn-block btn-primary" onClick={(name,phone,permission)=>this.props.add(this.state.name,this.state.phone,this.state.permission)} value="Thêm Mới"/>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            );
        }
        
    }

    render() {
        return (
            <div>
            {this.kiemTraTrangThai()}
          </div>
          
        );
    }
}

export default AddUser;