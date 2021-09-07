import React from 'react';
import "./style.css"

function Increment({increment}) {
    
    return (
        <div>
            <button onClick = {increment}>Increment</button>
        </div>
    );
}

export default Increment;