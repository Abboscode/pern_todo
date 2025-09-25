import React from 'react'
import './assets/styles/style.css'
import ParentAddTodo from './components/ParendAddTodo'

function App() {
  const Headers = ({ children }) => (
    <div className="concept concept-two">
      {children.split("").map((letter) => (
        <div key={crypto.randomUUID()} className="hover"><h1>{letter}</h1></div>))}
    </div>
  );
  const Background = ({ children }) => (
    <div className="concept-two-background" >{children}</div>

  )


  return (
    <><Background >
      <Headers children="TODOLIST"></Headers>
      <ParentAddTodo></ParentAddTodo>
    </Background> </>
  )
}

export default App
