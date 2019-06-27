import { noteData } from './firebaseConnect';

var redux = require('redux');

const noteInitialState = {
    testConnect: 'test thoi'
}
const allReducer = (state = noteInitialState, action) => {
    switch (action.type) {
        case "ADD_DATA":
            noteData.push(action.getItem)
            return state
        default:
            return state
    }
}
var store = redux.createStore(allReducer);
export default store;