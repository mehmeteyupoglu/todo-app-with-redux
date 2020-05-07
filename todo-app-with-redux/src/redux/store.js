import {combineReducers, createStore} from "redux"; 
import {todoReducer} from "./reducer"

const allReducers = combineReducers({todoReducer})

const myStore = createStore(allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default myStore