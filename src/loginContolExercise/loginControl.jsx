import { useState } from "react";
import LoginMessage from "./loginMessage";
import LogoutButton from "./logoutButton";
import LoginButton from "./loginButton";


const LoginControl = () => {

    const [loginStatus, setLoginStatus] = useState(false);
    let button = (loginStatus) ? <LogoutButton onClick={() => setLoginStatus(false)}/> : <LoginButton onClick={() => setLoginStatus(true)}/>

    return (
        <>
        <LoginMessage loginStatus={loginStatus}/>
        {button}
        </>
    );
};

export default LoginControl;