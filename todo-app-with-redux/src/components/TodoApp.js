import React, { Component } from 'react';
import TodoAppHeader from "./TodoAppHeader"; 
import TodoAppList from "./TodoAppList"

class TodoApp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             todos : []
        }
    }

    addTodo = (content) => {
        const newTodo = {
            content, 
            id: Math.random(), 
            completed : false
        }

        this.setState({
            todos : [...this.state.todos, newTodo]
        })
    }
    
    render() {
        return (
            <div>
                <TodoAppHeader addTodo={this.addTodo}/> 
                <TodoAppList todos={this.state.todos}/>
            </div>
        );
    }
}

export default TodoApp;
