import { useState } from "react";
import CounterData from "./counterStringer";

const Counter = () => {

    const [runningTotal, setRunningTotal] = useState(0);
    const [history, setHistory] = useState([]);

    
    const changeTotal = (e) => {
        const oldTotal = runningTotal;
        const newTotal = parseInt(runningTotal) + parseInt(e.target.value);
        const stringed = <CounterData oldVal={oldTotal} newVal={newTotal}/>
        setRunningTotal(newTotal);
        updateHistory(stringed);
    };

    const resetTotal = () => {
        const stringed = <CounterData oldVal={runningTotal} newVal={0}/>;
        setRunningTotal(0);
        updateHistory(stringed);
        
    };

    const updateHistory = (newString) => {
        if (history.length > 8){
            history.pop();
        } 
        setHistory(h => [newString, ...h]);
    };

    return (
        <>
        <h2>Total = {runningTotal}</h2>
        <button value={-10} onClick={e => changeTotal(e)}>-10</button>
        <button value={-5} onClick={e => changeTotal(e)}>-5</button>
        <button value={-1} onClick={e => changeTotal(e)}>-1</button>
        <button onClick={resetTotal}>RESET</button>
        <button value={1} onClick={e => changeTotal(e)}>+1</button>
        <button value={5} onClick={e => changeTotal(e)}>+5</button>
        <button value={10} onClick={e => changeTotal(e)}>+10</button>
        <br/>
        <>
        {history.map(h => 
            <>
            <p>{h}</p>
            <hr></hr>
            </>)}
        </>
        </>
    );
};

export default Counter;