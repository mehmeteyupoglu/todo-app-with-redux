import React from 'react';
import TodoAppListItem from "./TodoAppListItem"; 

const TodoAppList = (props) => {
    console.log("TodoAppList Props: ", {props})
    return (
        <div>

        {
            props.todos.map(todo => {
                return <TodoAppListItem key={todo.id} {...todo} toggleTodo={props.toggleTodo}/>
            })
        }
            
        </div>
    );
}

export default TodoAppList;

