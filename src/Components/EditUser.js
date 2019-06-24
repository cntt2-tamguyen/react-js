import React, { Component } from 'react';

class EditUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id:this.props.userEditOject.id,
            name:this.props.userEditOject.name,
            phone:this.props.userEditOject.phone,
            permission:this.props.userEditOject.permission
        }
    }

    isChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({[name]:value});
    }

    saveBtn = () => {
        var info = {};
        info.id=this.state.id;
        info.name=this.state.name;
        info.phone=this.state.phone;
        info.permission=this.state.permission;
        this.props.getEditUserInfo(info);
        this.props.changeEditUserStatus();//an form
    }

    render() {        
        return (
            <div className="col">
                <form>
                    <div className="card text-white bg-secondary mb-3 mt-2" style={{maxWidth: '18rem'}}>
                        <div className="card-header text-center">Edit User</div>
                        <div className="card-body">
                            <div className="form-group">
                                <input onChange={(event)=>this.isChange(event)} defaultValue={this.props.userEditOject.name} type="text" className="form-control" aria-describedby="helpId" placeholder="Tên User" name="name" />
                            </div>
                            <div className="form-group">
                                <input onChange={(event)=>this.isChange(event)} defaultValue={this.props.userEditOject.phone} type="text" className="form-control" aria-describedby="helpId" placeholder="Điện thoại" name="phone" />
                            </div>
                            <div className="form-group">
                                <select onChange={(event)=>this.isChange(event)} defaultValue={this.props.userEditOject.permission} className="custom-select" required name="permission">
                                    <option value={1}>Admin</option>
                                    <option value={2}>Moderator</option>
                                    <option value={3}>Normal</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <input type="button" className="btn btn-block btn-primary" value="Save" onClick={()=>this.saveBtn()}/>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default EditUser;