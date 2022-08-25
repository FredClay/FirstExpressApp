import {Link} from 'react-router-dom';

const Nav = () => {

    return (
        <>
        <h2>NavBar</h2>
        <Link to="/">Home</Link>
        <Link to="/contact">Contact Us</Link>
        <Link to="/users/1">Users</Link>
        <hr></hr>
        </>
    )

}

export default Nav;