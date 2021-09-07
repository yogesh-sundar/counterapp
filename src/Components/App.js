import React, { useState } from 'react';
import Decrement from './Decrement';
import Increment from './Increment';
import Reset from './Reset';

const App = () => {
    const [count, setCount] = useState(0);

const increment = () =>{
    setCount(count + 1);
}

const decrement = () =>{
    setCount(count - 1);
}
const reset = () =>
{
    setCount(0);
}
    return <div>
        <h1>{count}</h1>
        <Increment increment = {increment} />
        <Decrement decrement = {decrement} />
        <Reset reset = {reset} />
    </div>
}

export default App;