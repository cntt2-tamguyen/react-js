import React, { Component } from 'react';
import NoteItem from './NoteItem';
import { noteData } from './firebaseConnect';

class NoteList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataFirebase : []
        }
    }
    
    
    componentWillMount() {
        noteData.on('value',(notes)=>{
            var arrayData = [];
            notes.forEach(element => {
                arrayData.push({
                    key : element.key,
                    noteTitle : element.val().noteTitle,
                    noteContent : element.val().noteContent
                })
                
            });
            this.setState({
                dataFirebase:arrayData
            });
        })
    }
    
    getData = () => { 
        if(this.state.dataFirebase){
           return this.state.dataFirebase.map((value,key)=>{
               return (
                   <NoteItem
                    key={key}
                    i={key}
                    noteTitle={value.noteTitle}
                    noteContent={value.noteContent}
                    />
               )
           })
        }
    }
            
    render() {
        return (
            <div className="col">
                <div id="noteList" role="tablist" aria-multiselectable="true">
                    {this.getData()}
                </div>
            </div>
        );
    }
}

export default NoteList;