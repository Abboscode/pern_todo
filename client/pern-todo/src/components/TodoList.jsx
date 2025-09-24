import React from "react";
import { use } from "react";
import { useEffect, useState } from "react";
import Spinner from 'react-bootstrap/Spinner';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/styles/style-list.css'

export const TodoList = () => {
    const [todos, setTodos] = useState([])
    const [loading, setLoading] = useState(true)


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
            
                <li>
                <strong>{todo.description}</strong>
            </li>
        ))}
            </ol>
    )
}