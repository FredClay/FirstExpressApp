import { useState } from "react"

const Credentialiser = () => {

    const [uName, setUName] = useState('username');

    const [pWord, setPWord] = useState('password');
    
    return (
        <form>
            <label htmlFor="uInput">Username:</label>
            <input type="text" id="uInput" value={uName} onChange={e => setUName(e.target.value)}/>
            <br/>
            <label htmlFor="pInput">Password:</label>
            <input type="text" id="pInput" value={pWord} onChange={e => setPWord(e.target.value)}/>
            <br/>
            <button type="submit">I'm helping!</button>
        </form>
    );
};

export default Credentialiser;