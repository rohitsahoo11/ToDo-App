import React from 'react'

const TodoItems = ({todo, toggleComplete, deleteTodo}) => {
  return (
    <li>
      <span 
        style={{
          textDecoration: todo.completed ? 'Line-through': 'none'
        }}
        onClick={()=> toggleComplete(todo.id)}
      >
        {todo.text}
      </span>
      <button onClick={()=>deleteTodo(todo.id)}>Delete Todo</button>
    </li>
  )
}

export default TodoItems