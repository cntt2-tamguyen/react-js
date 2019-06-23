import React, { Component } from 'react';

class EditUser extends Component {
    render() {
        return (
            <div className="col">
                <form>
                    <div className="card text-white bg-secondary mb-3 mt-2" style={{maxWidth: '18rem'}}>
                        <div className="card-header text-center">Sửa thông tin User</div>
                        <div className="card-body">
                            <div className="form-group">
                                <input defaultValue={this.props.userEditOject.name} type="text" className="form-control" aria-describedby="helpId" placeholder="Tên User" name="name" onChange={(event)=>this.isChange(event)}/>
                            </div>
                            <div className="form-group">
                                <input defaultValue={this.props.userEditOject.phone} type="text" className="form-control" aria-describedby="helpId" placeholder="Điện thoại" name="phone" />
                            </div>
                            <div className="form-group">
                                <select defaultValue={this.props.userEditOject.permission} className="custom-select" required name="permission" onChange={(event)=>this.isChange(event)}>
                                    <option value={1}>Admin</option>
                                    <option value={2}>Moderator</option>
                                    <option value={3}>Normal</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <input type="reset" className="btn btn-block btn-primary" value="Save" onClick={()=>this.props.changeEditUserStatus()}/>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default EditUser;