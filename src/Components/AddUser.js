import React, { Component } from 'react';

class AddUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            trangThaiChinhSua : true
        }
    }

    hienThiNut = () => {
        if (this.state.trangThaiChinhSua===true) {
            return <div className="btn btn-block btn-outline-secondary">Đóng lại</div>;
        }
        else {
            return <div className="btn btn-block btn-outline-info">Thêm mới</div>;
        }
    }
    
    render() {
        return (
            <div className="col-3">
            <div>
                {this.hienThiNut()}
              <div className="card mb-3 mt-2" style={{maxWidth: '18rem'}}>
                <div className="card-header">Thêm mới user vào hệ thống</div>
                <div className="card-body">
                  <div className="form-group">
                    <input type="text" className="form-control" aria-describedby="helpId" placeholder="Tên User" />
                  </div>
                  <div className="form-group">
                    <input type="text" className="form-control" aria-describedby="helpId" placeholder="Điện thoại" />
                  </div>
                  <div className="form-group">
                    <select className="custom-select" required>
                      <option value>Chọn quyền mặc định</option>
                      <option value={1}>Admin</option>
                      <option value={2}>Moderator</option>
                      <option value={3}>Normal</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <div className="btn btn-block btn-primary">Thêm mới</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        );
    }
}

export default AddUser;