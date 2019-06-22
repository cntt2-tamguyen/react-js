import React, { Component } from 'react';

class Search extends Component {
    render() {
        return (
          
                <div className="col-12 text-left">
                    <div className="form-group">
                        <div className="btn-group">
                            <input type="text" className="form-control" aria-describedby="helpId" placeholder="Nhập từ khóa" />
                            <div className="btn btn-info">Tìm</div>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="btn btn-block btn-outline-secondary" onClick={()=>this.props.ketNoi()}>Đóng lại</div>
                        <div className="btn btn-block btn-outline-info" onClick={()=>this.props.ketNoi()}>Thêm mới</div>
                    </div>
                    <hr />
                </div>
          
        );
    }
}

export default Search;