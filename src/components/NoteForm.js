import React, { Component } from 'react';
import {connect} from 'react-redux';

class NoteForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            noteTitle:'',
            noteContent:'',
            id:''
        }
    }
    
    componentWillMount() {
        if(this.props.editItem){
            this.setState({
                noteTitle: this.props.editItem.noteTitle,
                noteContent: this.props.editItem.noteContent,
                id: this.props.editItem.key,
            });
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
        if (this.state.id){
            var editObject ={};
            editObject.id=this.state.id;
            editObject.noteTitle=this.state.noteTitle;
            editObject.noteContent=this.state.noteContent;
            this.props.editDataStore(editObject);
        }else{
            var item = {};
            item.noteTitle=title;
            item.noteContent=content;
            this.props.addDataStore(item);
        }
        this.props.changeEditStatus();
        this.props.alertOn();
    }

    printTitle = () => {
        if(this.props.addStatus){
            return <h4>Add Note</h4>
        }else{
            return <h4>Edit Note</h4>
        }
    }

    render() {
        return (
            <div className="col-4">
                {this.printTitle()}
                <form>
                    <div className="form-group">
                        <label >Tiêu đề Note</label>
                        <input  defaultValue={this.props.editItem.noteTitle} onChange={(event) =>this.isChange(event)} type="text" className="form-control" name="noteTitle" id="noteTitle" aria-describedby="helpIdNoteTitle" placeholder="Tiêu đề Note" />
                        <small id="helpIdNoteTitle" className="form-text text-muted">Điền tiêu đề vào đây</small>
                    </div>
                    <div className="form-group">
                        <label >Nội dung Note</label>
                        <textarea  defaultValue={this.props.editItem.noteContent} onChange={(event) =>this.isChange(event)} type="text" className="form-control" name="noteContent" id="noteContent" aria-describedby="helpIdNoteContent" placeholder="Nội dung Note" />
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
        editItem: state.editItem,
        addStatus: state.isAdd
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addDataStore: (getItem) => {
            dispatch({type:"ADD_DATA",getItem})
        },
        editDataStore: (getItem) => {
            dispatch({type:"EDIT",getItem})
        },
        changeEditStatus: () => {
            dispatch({type:"CHANGE_EDIT_STATUS"})
        },
        alertOn: () => {
            dispatch({type:"ALERT_ON"})
        },
        alertOff: () => {
            dispatch({type:"ALERT_OFF"})
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(NoteForm)