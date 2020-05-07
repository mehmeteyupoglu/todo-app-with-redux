
import React from 'react';

const TodoAppListItem = ({content, id, completed, toggleTodo}) => {
    return (
        <div 
        style ={{textDecoration: completed ? "line-through" : "initial"}}
        >

        <p
        onClick={() => toggleTodo(id)}> 
        {content} 
        </p>

        </div>
    );
}

export default TodoAppListItem;
