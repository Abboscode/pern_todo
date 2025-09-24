import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './assets/styles/style.css'
import { TodoList } from './components/TodoList'

function App() {
  const Headers = ({ children }) => (
    <div class="concept concept-two">
      {children.split("").map((letter) => (
        <div class="hover"><h1>{letter}</h1></div>))}
    </div>
  );
  const Background = ({children}) => (
    <div class="concept-two-background">{children}</div>

  )


  return (
    <><Background>
      <Headers children="T O D O L I S T"></Headers>
      <TodoList></TodoList>
    </Background> </>
  )
}

export default App
