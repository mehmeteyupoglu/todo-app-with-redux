import React from 'react';

const TodoAppListItem = (props) => {
    console.log(props.todos)
    return (
        <div>
            {
                props.todos.map(item => item.content)
            }
        </div>
    );
}

export default TodoAppListItem;
