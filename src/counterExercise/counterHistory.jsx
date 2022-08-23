import CounterData from "./counterStringer";
import CounterStorage from './counterStorage';

const CounterHistory = () => {
    console.log(<CounterStorage/>);
    const allHistory = CounterStorage.map(data => <CounterData oldval={data.oldval} newVal={data.newVal}/>)

    return (
        <>
            {allHistory}
        </>
    )
};

export default CounterHistory;