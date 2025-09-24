import React from "react";
import { use } from "react";
import { useEffect, useState } from "react";
import Spinner from 'react-bootstrap/Spinner';
import 'bootstrap/dist/css/bootstrap.min.css';


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
    const todoString = ["T", "O", "D", "O", " ", "L", "I", "S", "T"]

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
        <div className="container">
            <h1>asdasasdas</h1></div>
    )
}