import React from 'react'

export default function TodoList() {
    let todos = [
        'chill',
        'eat',
        'run'
    ]
  return (
    <div>
         {todos.map((todo, todoIndex) => {
            return (
                <li key={todoIndex}>{todo}</li>
            )
         })}
    </div>
  )
}

