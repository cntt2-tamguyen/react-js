import React, { Component } from 'react';

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            trangThai:0
        }
    }

    thongbao = () => {
        alert('Cach su li tuong tac trong react js')
    }

    thongbao2 = () => {
        alert('Thong bao so 2')
    }

    thongbao3 = (x) => {
        alert(x)
    }
    
    renderButton = () => (
        <div className="row">
            <div className="btn btn-group">
                <div className="btn btn-info" onClick={()=>this.editClick()}>Edit</div>
                <div className="btn btn-warning">Remove</div>
            </div>
        </div>
    )

    renderForm = () => (
        <div className="row">
            <div className="form-group">
                <input type="text" name="ten" className="form-control" />
                <div className="btn btn-block btn-danger" onClick={()=>this.saveClick()}>Save</div>
            </div>
        </div>
    )

    displayCheck = () => {
        if(this.state.trangThai === 0){
            return this.renderButton();
        } else{
            return this.renderForm();
        }
    }

    editClick = () => {
        this.setState({trangThai:1});
    }
    saveClick = () => {
        this.setState({trangThai:0});
    }

    render() {
        return (
            <section>
                <div className="col-lg-4">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="p-1">
                                <img className="img-fluid rounded-circle" src={this.props.anh} alt />
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="p-1">
                                <h2 className="display-6">{this.props.tieude}</h2>
                                <p>{this.props.trichdan}</p>
                            </div>
                            {this.displayCheck()}
                            <hr/>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Content;
