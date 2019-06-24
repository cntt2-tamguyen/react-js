import React, { Component } from 'react';
import TableDataRow from './TableDataRow.js'

class TableData extends Component {
    deleteBtnClick = (idUser) => {
        this.props.deleteUser(idUser)
    }

    mappingDataUser = () => 
        this.props.dataUserProps.map((value,key)=>(
            <TableDataRow 
                key={key} stt={key} 
                name={value.name} 
                phone={value.phone} 
                permission={value.permission} 
                id={value.id}
                editFunClick={(user)=>this.props.editFun(value)}
                changeEditUserStatus={()=>this.props.changeEditUserStatus()}
                deleteBtnClick={(idUser)=>this.deleteBtnClick(idUser)}/>
        ))

    
    render() {
        return (
            <div className="col">
                <table className="table table-striped table-inverse table-hover">
                    <thead>
                    <tr>
                        <th>STT</th>
                        <th>Tên</th>
                        <th>Điện thoại</th>
                        <th>Quyền</th>
                        <th>Thao tác</th>
                    </tr>
                    </thead>
                    <tbody>
                        {this.mappingDataUser()}                  
                    </tbody>
                </table>
            </div>

        );
    }
}

export default TableData;