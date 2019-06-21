import React, { Component } from 'react';

class NewsItem extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div className="col-4">
                <div className="card-deck">
                    <div className="card">
                        <a href="/tin-chi-tiet"><img className="card-img-top" src={this.props.anh} alt="react" /></a>
                        <div className="card-body">
                            <h4 className="card-title"> <a href="/tin-chi-tiet">{this.props.tieuDe}</a></h4>
                            <p className="card-text">{this.props.trichDan}</p>
                        </div>
                    </div>
                </div>
                <hr />
            </div>
        );
    }
}

export default NewsItem;