import {combineReducers, createStore, applyMiddleware} from "redux"; 
import {todoReducer, notificationReducer} from "./reducer"
import thunk from "redux-thunk";


const allReducers = combineReducers({
    todoReducer, notificationReducer
})

const myStore = createStore(allReducers,applyMiddleware(thunk))

export default myStore