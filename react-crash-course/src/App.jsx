import './App.css'
import TodoTitle from "./components/TodoTitle.jsx"
import Todo from "./components/Todo.jsx";
import Popup from './components/Popup.jsx';
import Counter from "./components/Counter.jsx"
import {useState, useEffect} from "react";

function App() { 
  //Best practice is to use useState hook on top, followed by functions then useEffect hook on the bottom
    const [popupOpen, setPopupOpen] = useState(false);

    //First step to Emitting Events 
    function togglePopup() {
      setPopupOpen(true)
      console.log('parent notified')
    }

    function closePopup() {
      setPopupOpen(false);
    }

    useEffect(() => {console.log('Only when component mounts')}, [])
    useEffect(() => {console.log(`When component mounts AND ${popupOpen} changes`)}, [popupOpen])
    useEffect(() => {console.log("on EVERY render")})
   
  return (
    <>
      <TodoTitle todoTitle="My Todo's" />
      <div>
        <input type="text" onChange={(event) => {
          console.log(event.target.value)
        }}/> 
        <button onClick={() => setPopupOpen(true)}>Add To</button> 
      </div>
      <Todo togglePopup ={togglePopup} task="Learn React"/>
      <Todo togglePopup ={togglePopup} task="Finish ASAP Frontend"/>
      <Todo togglePopup ={togglePopup} task="Land a job"/> 
      <Todo togglePopup ={togglePopup} task="Make money"/>
      {popupOpen && <Popup closePopup={closePopup} buttonTitle="Are You Sure?"/>}
    </>
  );
}

export default App
