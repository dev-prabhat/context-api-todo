import React, { useReducer } from 'react'
import { Container } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import TodoContext from './Context/TodoContext'
import TodoReducer from './Context/reducer'
import TodoForm from './Components/TodoForm'
import Todos from './Components/Todos'


const App = () => {
  const [todos, dispatch] = useReducer(TodoReducer, [])
  return (
    <div>
      <TodoContext.Provider value={{ todos, dispatch }}>
        <Container fluid>
          <h1>Todo List with Context API</h1>
          <TodoForm />
          <Todos />
        </Container>
      </TodoContext.Provider>
    </div>
  )
}

export default App