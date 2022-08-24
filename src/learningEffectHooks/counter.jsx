import { useState, useEffect } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        // Replaces to CDM and CDU
        document.title = `Clicked ${count} times`;
        // Replaces CWU
        return(() => console.log(`Final: ${count}`));
    });
    return (
        <>
            <p>You have clicked the button {count} times</p>
            <button onClick={()=>setCount(count=>count+1)}>
            Click Me!
            </button>
        </>
    );
};

export default Counter;