import React, {useState} from 'react';
import './../App.css';
import Todotable from './Todotable';

const TodoList = () => {
    
    const [todo, setTodo] = useState({description: '', date: ''});
    const [todos, setTodos] = useState([]);

    const addTodo = (event) => {   
        event.preventDefault();
        setTodos([...todos, todo]);
    }

    const inputChanged = (event) => {  
        setTodo({...todo, [event.target.name]: event.target.value});
    }

    const removeTable = (index) => {
        setTodos(todos.filter((todo, i) => i !== index))
    }

    return(
        <div>
            <h1>Simple Todolist</h1>
            <p>Add todo</p>
            Description: <input type="text" name="description" onChange={inputChanged} value={todo.description} />
            Date: <input type="text" name="date" onChange={inputChanged} value={todo.date} />
            <button onClick={addTodo}>Add</button>
            <Todotable todos={todos} removeTable={(index) => removeTable(index)} />
        </div>
    );
};

export default TodoList;