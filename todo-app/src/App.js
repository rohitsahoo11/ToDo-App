import React, { useEffect, useState } from 'react'
import './App.css';
import TodoItems from './components/TodoItems';

function App() {

  const [todos, setTodos] = useState([])
  const [input, setInput] = useState('')
  const [filter, setFilter] = useState('All')

  const filteredTodo = todos.filter((todo)=>{
    if (filter === 'complete') return todo.completed
    if (filter === 'active') return !todo.completed
    return true
  })

  const handleTodo=()=>{
    if(input.trim()){
      const newTodo = {
        id: Date.now(),
        text: input,
        completed: false,
      }
      setTodos([...todos, newTodo])
      setInput('')
    }
  }

  const toggleComplete = (id)=>{
    setTodos(
      todos.map((todo)=>
        todo.id === id ? {...todo, completed: !todo.completed}:todo
      )
    )
  }

  const deleteTodo = (id)=>{
    setTodos(
      todos.filter((todo)=>
        todo.id !== id
      )
    )
  }


  useEffect(()=>{
    localStorage.setItem('todos', JSON.stringify(todos))
  },[todos])

  useEffect(()=>{
    const savedTodos = JSON.parse(localStorage.getItem('todos'))
    if(savedTodos){
      setTodos(savedTodos)
    }
  },[])
  

  return (
    <div className="App">
      <h1>TODO APP</h1>
      <input 
      type='text'
      value={input}
      placeholder='Enter taks...'
      onChange={(e)=> setInput(e.target.value)}
      >
      </input>
      <button onClick={handleTodo}>Add</button>
      <ul>
        {filteredTodo.map((todo)=>(
          <TodoItems 
            key={todo.id}
            todo={todo}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
