import React from 'react';
import TodoAppListItem from "./TodoAppListItem"; 

const TodoAppList = (props) => {
    console.log("TodoAppList Props: ", {props})
    return (
        <div>
            <TodoAppListItem todos={props.todos}/>
        </div>
    );
}

export default TodoAppList;

