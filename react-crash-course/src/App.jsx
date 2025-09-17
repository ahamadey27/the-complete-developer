import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>My ToDo List</h1>
      <div>
        <h2>Finish This React Course</h2>
        <span>...</span>
        <button>Delete</button>
      </div>
      <div>
        <h2>Finish ASAP Frontend</h2>
        <button>Delete</button>
      </div>
      <div>
        <h2>Land a job</h2>
        <button>Delete</button>
      </div>
      <div>
        <h2>earn money</h2>
        <button>Delete</button>
      </div>
    </>
  );
}

export default App
