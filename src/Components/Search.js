import React, { Component } from 'react';

class Search extends Component {
    render() {
        return (
          
                <div className="col-12 text-left">
                    <div className="form-group">
                        <div className="btn-group">
                            <input type="text" className="form-control" name id aria-describedby="helpId" placeholder="Nhập từ khóa" />
                            <div className="btn btn-info">Tìm</div>
                        </div>
                        
                    </div>
                    <hr />
                </div>
          
        );
    }
}

export default Search;