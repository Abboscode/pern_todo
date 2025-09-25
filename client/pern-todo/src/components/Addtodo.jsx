
import React from "react";
import '../assets/styles/style-add.css'
import { useState } from "react";


const Addtodo = ({onAdd}) => {

  const [todoText, setTodoText] = useState("");

 const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(todoText);
    setTodoText("");


  }


  return <div className="col-3">
           
           
  

    <form onSubmit={handleSubmit} > <input className="effect-3" type="text" value={todoText} onChange={(e) => setTodoText(e.target.value)} placeholder="Type your todo here" />
      <span className="focus-border"></span>
    <button type="submit" style={{ marginLeft: 20 ,display:"flex"}} className="button-default gummy-lemon">Add</button>
    </form>
    
  </div>
}

export default Addtodo;