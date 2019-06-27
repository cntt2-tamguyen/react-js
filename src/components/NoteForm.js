import React, { Component } from 'react';

class NoteForm extends Component {
    render() {
        return (
            <div className="col-4">
                <h3>Edit Note</h3>
                <div className="form-group">
                    <label >Tiêu đề Note</label>
                    <input type="text" className="form-control" name="noteTitle" id="noteTitle" aria-describedby="helpIdNoteTitle" placeholder="Tiêu đề Note" />
                    <small id="helpIdNoteTitle" className="form-text text-muted">Điền tiêu đề vào đây</small>
                </div>
                <div className="form-group">
                    <label >Nội dung Note</label>
                    <textarea type="text" className="form-control" name="noteContent" id="noteContent" aria-describedby="helpIdNoteContent" placeholder="Nội dung Note" defaultValue={""} />
                    <small id="helpIdNoteContent" className="form-text text-muted">Điền nội dung vào đây</small>
                </div>
                <button type="submit" className="btn btn-primary btn-block">Save</button>
            </div>
        );
    }
}

export default NoteForm;