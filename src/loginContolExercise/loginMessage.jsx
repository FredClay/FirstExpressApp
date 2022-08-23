const LoginMessage = (props) => {

    const {loginStatus} = props;
    if (loginStatus) {
        return <h2>Hiya Friend!</h2>
    }
    return <h2>Sign up today!</h2>
};

export default LoginMessage;