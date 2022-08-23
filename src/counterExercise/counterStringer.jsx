const CounterData = (newData) => {

    const {oldVal, newVal} = newData;
    const difference = newVal - oldVal;
    const sign = (difference >= 0) ? '+' : '-';

    return(
        `${oldVal} ${sign} ${Math.abs(difference)} = ${newVal}`
    );
};

export default CounterData;
