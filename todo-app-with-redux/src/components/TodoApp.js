import React from 'react';
import TodoAppHeader from "./TodoAppHeader"; 
import TodoAppList from "./TodoAppList"

const TodoApp = () => {
    return (
        <div>
            <div>
                <TodoAppHeader /> 
                <TodoAppList />
            </div>
        </div>
    );
}



export default TodoApp;
