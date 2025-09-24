import React from "react";
import { use } from "react";
import { useEffect, useState } from "react";
import Spinner from 'react-bootstrap/Spinner';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/styles/style-list.css'
import '../assets/styles/style-button.css'

export const TodoList = () => {
    const [todos, setTodos] = useState([])
    const [loading, setLoading] = useState(true)
    const [count, setCount] = useState(1)

    const fetchTodos = async () => {
        try {
            const response = await fetch("http://localhost:5000/todos")
            const jsonData = await response.json()
            setTodos(jsonData)
            setLoading(false)
            console.log(jsonData)

        } catch (err) {
            console.error(err.message)
        }
    };
    

    useEffect(() => {

        fetchTodos();
    }, [todos])

    if (loading) {
        return (
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>

            </Spinner>
        );
    }

    return (
        <ol class="alternating-colors">{todos.map(todo => (
            
                <li key={todo.id} className="todo-item">
                <span className="circle-number">{todo.id}</span>
                <strong>{todo.description}</strong>
                <div style={{margin:"10px"}}><button className="gummy-raspberry"class="todo-btn">Edit</button>
                <button className="gummy-cherry"class="todo-btn">Delete</button>
                </div>
            </li>
        ))}
            </ol>
    )
}