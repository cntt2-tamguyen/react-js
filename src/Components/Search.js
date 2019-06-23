import React, { Component } from 'react';

class Search extends Component {
    
    hienThiNut = () => {
        if (this.props.hienThiForm===true) {
            return <div className="btn btn-block btn-outline-secondary ml-2"  onClick={()=>this.props.ketNoi()}>Đóng lại</div>;
        }
        else {
            return <div className="btn btn-block btn-outline-info ml-2"  onClick={()=>this.props.ketNoi()}>Thêm mới</div>;
        }
    }
    
    render() {
        return (
          
                <div className="col-12 text-left">
                    <div className="form-group">
                        <div className="btn-group">
                            <input type="text" className="form-control" aria-describedby="helpId" placeholder="Nhập từ khóa" />
                            <div className="btn btn-info" onClick={this.props.checkConnectProps}>Tìm</div>
                        </div>
                        <div className="btn-group">
                            {this.hienThiNut()}
                        </div>
                    </div>
                    <hr/>
                </div>
          
        );
    }
}

export default Search;