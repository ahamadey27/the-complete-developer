import {useState} from 'react';
 
function Counter() {
    const [array, setArray] = useState([])

    return(
        <div>
            <h1>{array.toString()}</h1>
            <button onClick={() => {
                setArray((prevArray) => [...prevArray, '+1'])
            }}>Increment</button>
            <button onClick={() => {
                setArray((prevArray) => [...prevArray, '-1'])
            }}>Decrement</button> 
            <button>Reset</button> 
        </div>
    ) 
}

export default Counter;