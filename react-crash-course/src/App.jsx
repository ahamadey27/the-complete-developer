import './App.css'
import TodoTitle from "./components/TodoTitle.jsx"
import Todo from "./components/Todo.jsx";
import Popup from './components/popup.jsx';

function App() {
  return (
    <>
      <TodoTitle todoTitle="My Todo's" />
      <Todo task="Learn React" 
      description="Code along and take notes" />
      <Todo task="Finish ASAP Frontend"
      description="Work the front end"/>
      <Todo task="Land a job"
      description="Build portfolio"/>
      <Todo task="Make money"
      description="Save your money"/>
      {/* <Popup buttonTitle="Are You Sure?"/>  */}
    </>
  );
}

export default App
