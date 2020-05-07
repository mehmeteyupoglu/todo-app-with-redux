import React from 'react';
import TodoAppListItem from "./TodoAppListItem"; 
import {connect} from "react-redux"

const TodoAppList = (props) => {
    console.log('Props of todoAppList is: ', {props})
    return (
        <div>

        {
            props.todos.map(todo => {
                return <TodoAppListItem 
                key={todo.id} 
                {...todo} 
                
                />
            })
        }
            
        </div>
    );
}



const mapStateToProps = (state) => {
    return {
        todos : state.todoReducer
    }
}

export default connect(mapStateToProps)(TodoAppList);

