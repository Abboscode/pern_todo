
import {  useEffect, useState } from "react";
import Spinner from 'react-bootstrap/Spinner';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/styles/style-list.css'
import '../assets/styles/style-button.css'

 const TodoList = ({listTodo}) => {
    const [todos, setTodos] = useState([])
    const [loading, setLoading] = useState(true)
    

    useEffect(() => {
        
            setTodos(listTodo)
            setLoading(false)
        
    }, [listTodo])


    if (loading) {
        return (
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>

            </Spinner>
        );
    }

    return (

        <div className="container-list">
        <ol className="alternating-colors">{todos.map(todo => (
            
                <li key={todo.id} className="todo-item">
                <span className="circle-number">{todo.id}</span>
                <strong>{todo.description}</strong>
                <div style={{margin:"10px"}}><button className="button-default gummy-raspberry">Edit</button>
                <button className="button-default gummy-cherry">Delete</button>
                </div>
            </li>
        ))}
            </ol></div>
    )
}
export default TodoList;