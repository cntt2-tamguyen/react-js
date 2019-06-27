import React, { Component } from 'react';
import {connect} from 'react-redux';

class NoteForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            noteTitle:'',
            noteContent:''
        }
    }

    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]:value
        });
    }
    
    addData  = (title,content) => {
        // var item = {};
        // item.noteTitle=title;
        // item.noteContent=content;
        // this.props.getData(item);
        // item = JSON.stringify(item);
        // this.props.addDataStore(item);
        this.props.addDataStore()
    }

    render() {
        return (
            <div className="col-4">
                <h3>Edit Note</h3>
                <form>
                    <div className="form-group">
                        <label >Tiêu đề Note</label>
                        <input onChange={(event) =>this.isChange(event)} type="text" className="form-control" name="noteTitle" id="noteTitle" aria-describedby="helpIdNoteTitle" placeholder="Tiêu đề Note" />
                        <small id="helpIdNoteTitle" className="form-text text-muted">Điền tiêu đề vào đây</small>
                    </div>
                    <div className="form-group">
                        <label >Nội dung Note</label>
                        <textarea onChange={(event) =>this.isChange(event)} type="text" className="form-control" name="noteContent" id="noteContent" aria-describedby="helpIdNoteContent" placeholder="Nội dung Note" defaultValue={""} />
                        <small id="helpIdNoteContent" className="form-text text-muted">Điền nội dung vào đây</small>
                    </div>
                    <button type="reset" onClick={()=>this.addData(this.state.noteTitle,this.state.noteContent)} className="btn btn-primary btn-block">Save</button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        testThoi: state.testConnect
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addDataStore: (getItem) => {
            dispatch({type:"ADD_DATA"})
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(NoteForm)