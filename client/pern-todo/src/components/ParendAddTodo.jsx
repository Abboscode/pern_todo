import React, { useEffect } from "react";
import { useState } from "react";
import  TodoList  from "./TodoList";
import Addtodo  from "./Addtodo";

const ParentAddTodo= () => {

    const [listTodo, setListTodo] = useState([])

    const fetchTodos = async () => {
        try {
            const response = await fetch("http://localhost:5000/todos")
            const jsonData = await response.json()
            setListTodo(jsonData)
            console.log(jsonData)
        }
        catch (err) {
            console.error(err.message)

        }
    };
    useEffect(() => {
        fetchTodos();
    }, [])
//function to add todo optimistickly 
     async function  addToDoOptimistickly (newTodo) {
        const tempTodo = { id: `temp-${Date.now()}`, description: newTodo };
        setListTodo((prevTodos) => [...prevTodos, tempTodo]); 
        try {
            
            const response = await fetch("http://localhost:5000/todos", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ description: newTodo })
            });
            if (response.status === 201) {
                
                const data = await response.json();
            
                console.log(data);
                

            }
        } catch (error) {
            console.error("Failed to add todo:", error);
            // Revert the optimistic update if the request fails
            
        }




    }

    return <>
        <Addtodo onAdd={addToDoOptimistickly}></Addtodo>
        <TodoList listTodo={listTodo} ></TodoList>


    </>
}
export default ParentAddTodo;

