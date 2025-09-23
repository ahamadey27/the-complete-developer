import {useState} from 'react';
 
function Counter() {
    const [count, setCount] = useState(0)
    return(
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={() => console.log('increment')} >Increment</button>
            <button onClick={() => console.log('decrement')}>Decrement</button>
            <button onClick={() => console.log('reset')}>Reset</button>
        </div>
    )
}

export default Counter;