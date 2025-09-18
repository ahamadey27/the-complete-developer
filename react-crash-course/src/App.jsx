import './App.css'
import TodoTitle from "./components/TodoTitle.jsx"
import Todo from "./components/Todo.jsx";
import Popup from './components/popup.jsx';

function App() {
  return (
    <>
      <TodoTitle />
      <Todo task="Learn React" />
      <Todo task="Finish ASAP Frontend"/>
      <Todo task="Land a job"/>
      <Todo task="Make money"/>
      {/* <Popup /> */}
    </>
  );
}

export default App
