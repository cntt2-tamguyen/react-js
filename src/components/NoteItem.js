import React, { Component } from 'react';

class NoteItem extends Component {
    render() {
        return (
            <div className="card">
                <div className="card-header" role="tab" id="note1">
                    <h5 className="mb-0">
                        <a data-toggle="collapse" data-parent="#noteList" href="#noteContent1" aria-expanded="true" aria-controls="noteContent1">
                            Ghi chú ngày 31/03/2019
                        </a>
                    </h5>
                    <div className="btn-group float-right">
                        <button className="btn btn-outline-info">Edit</button>
                        <button className="btn btn-outline-danger">Delete</button>
                    </div>
                </div>
                <div id="noteContent1" className="collapse in" role="tabpanel" aria-labelledby="note1">
                    <div className="card-body">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas necessitatibus, eius aliquid repellat repellendus reiciendis inventore, ad, praesentium saepe ut delectus aspernatur quo! Cupiditate vitae similique quos aut, culpa veritatis.
                    </div>
                </div>
            </div>

        );
    }
}

export default NoteItem;