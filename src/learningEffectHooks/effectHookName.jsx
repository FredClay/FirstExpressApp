import { useEffect, useState } from "react";

const HookName = () => {

    const [name, setName] = useState('');

    // only triggers when an element from end array is updated.
    useEffect(() => {
        console.log(`Hi, ${name}`);
        document.title = `${name} says 'Hi!'`
    }, [name])

    return (
        <>
            <input type="text" onChange={(e) => setName(e.target.value)}></input>
            <p>How's it going {name}?</p>
        </>        
    )

}

export default HookName;