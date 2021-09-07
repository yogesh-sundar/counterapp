import React from 'react';

function Decrement({decrement}) {
    
    return (
        <div>
            <button onClick = {decrement}>Decrement</button>
        </div>
    );
}

export default Decrement;