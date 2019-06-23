import React, { Component } from 'react';

class TableDataRow extends Component {
    permissionShow = () => {
        if (this.props.permission === 1) {return "Admin";}
        else if (this.props.permission === 2) {return "Moderator";}
        else { return "Normal";}
    }

    editClick = () => {
        this.props.editFunClick();
        this.props.changeEditUserStatus();
    }

    render() {
        return (
            <tr>
                <td >{this.props.stt+1}</td>
                <td>{this.props.name}</td>
                <td>{this.props.phone}</td>
                <td>{this.permissionShow()}</td>
                <td>
                <div className="btn-group">
                    <div className="btn btn-warning sua"><i className="fa fa-edit" onClick={()=>this.editClick()}>Edit</i></div>
                    <div className="btn btn-danger xoa"><i className="fa fa-delete">Delete</i></div>
                </div>
                </td>
            </tr>
        );
    }
}

export default TableDataRow;