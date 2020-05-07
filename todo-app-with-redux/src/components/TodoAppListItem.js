
import React from 'react';

const TodoAppListItem = (props) => {
    console.log("TodoAppListItem Props ", {props})
    return (
        <div>
            {
                props.todos.map(item => item.content)
            }
        </div>
    );
}

export default TodoAppListItem;
