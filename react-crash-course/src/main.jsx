import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import MyTodo from './components/MyTodo.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <MyTodo />
  </StrictMode>,
)
