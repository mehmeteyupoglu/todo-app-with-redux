import React, { Component } from 'react';

class TodoAppAdd extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             value : ""
        }
    }
    
    render() {
        return (
            <div>
                <form onSubmit={(e) => {
                    e.preventDefault(); 
                    const newContent = this.state.value; 
                    this.props.addTodo(newContent)
                }}>

                <input 
                type="text" 
                value={this.state.value}
                placeholder="Todo Giriniz"
                onChange={(e) => {
                    this.setState({
                        value: e.target.value
                    })
                }}
                />
                <button type="submit">Todo Ekle</button>
            </form>
            </div>
        );
    }
}

export default TodoAppAdd;


