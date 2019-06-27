import React, { Component } from 'react';
import {connect} from 'react-redux';

class NoteItem extends Component {
    twoActionButton = () => {
        this.props.changeEditStatus();
        this.props.getEditData(this.props.note)
    }
    render() {
        return (
            <div className="card">
            <div className="card-header" role="tab" id="note1-content">
                <h5 className="mb-0">
                    <a data-toggle="collapse" data-parent="#noteList" href={"#number" + this.props.i} aria-expanded="true" aria-controls="note1">
                        {this.props.noteTitle}
                    </a>
                    <div className="btn-group float-right">
                        <button className="btn btn-outline-info" onClick={() =>this.twoActionButton()}>Edit</button>
                        <button className="btn btn-outline-danger">Delete</button>
                    </div>
                </h5>
            </div>
            <div id={"number" + this.props.i} className="collapse in" role="tabpanel" aria-labelledby="note1-content">
                <div className="card-body">
                    {this.props.noteContent}
                </div>
            </div>
        </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
       
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        changeEditStatus: () => {
            dispatch({
              type : "CHANGE_EDIT_STATUS"
            })
        },
        getEditData: (editObject) => {
            dispatch({
              type : "GET_EDIT_DATA",
              editObject
            })
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NoteItem)
