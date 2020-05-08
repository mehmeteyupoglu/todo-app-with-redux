import React from 'react';
import TodoAppHeader from "./TodoAppHeader"; 
import TodoAppList from "./TodoAppList"
import {connect} from "react-redux"

const TodoApp = (props) => {
    return (
        <div>
            <div>
                <TodoAppHeader /> 
                <TodoAppList />
                <h3> {props.showNotification && props.notificationText}</h3>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    const {showNotification, notificationText} = state.notificationReducer
    return {
        showNotification, notificationText
    }
}


export default connect(mapStateToProps)(TodoApp);
