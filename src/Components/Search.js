import React, { Component } from 'react';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state ={
            tempValue:''
        }
    }
       
    hienThiNut = () => {
        if (this.props.hienThiForm===true) {
            return <div className="btn btn-block btn-outline-secondary ml-2"  onClick={()=>this.props.ketNoi()}>Đóng lại</div>;
        }
        else {
            return <div className="btn btn-block btn-outline-info ml-2"  onClick={()=>this.props.ketNoi()}>Thêm mới</div>;
        }
    }

    isChange = (event) => {
        console.log(event.target.value);
        this.setState({
            tempValue:event.target.value
        })
    }
    
    render() {
        return (
          
                <div className="col-12 text-left">
                    <div className="form-group">
                        <div className="btn-group">
                            <input type="text" onChange={(event)=>this.isChange(event)} className="form-control" aria-describedby="helpId" placeholder="Nhập tên cần tìm" />
                            <div className="btn btn-info" onClick={(dl)=>this.props.checkConnectProps(this.state.tempValue)}>Tìm</div>
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