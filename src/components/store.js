import { noteData } from '/fib';

var redux = require('redux');
var store = redux.createStore(allReducer);
const noteInitialState = {}
const allReducer = (state = noteInitialState, action) => {
    switch (action.type) {
        case "ADD_DATA":
            return state
        default:
            return state
    }
}