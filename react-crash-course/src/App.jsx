import './App.css'
import TodoTitle from "./components/TodoTitle.jsx"
import Todo from "./components/Todo.jsx";
import Popup from './components/popup.jsx';

function App() {
  let popupOpen = false;

  function togglePopup() {
    popupOpen = !popupOpen;
    console.log(popupOpen);
  }
   
  return (
    <>
      <TodoTitle todoTitle="My Todo's" />
      <div>
        <input type="text" onChange={(event) => {
          console.log(event.target.value)
        }}/> 
        <button onClick={() => togglePopup()}>Add To</button> 
      </div>
      <Todo task="Learn React" 
      />
      <Todo task="Finish ASAP Frontend"
      />
      <Todo task="Land a job"
      />
      <Todo task="Make money"
      />
      {popupOpen ? <Popup buttonTitle="Are You Sure?"/> : null }
    </>
  );
}

export default App
