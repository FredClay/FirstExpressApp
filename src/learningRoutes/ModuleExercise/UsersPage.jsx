import { Link, useParams } from 'react-router-dom';

const UsersPage = () => {

    const {id} = useParams();

    return (
        <>
            <h2>This is the users page!</h2>
            <h1>Hello user #{id}</h1>

            <ul>
                 <li>
                     <Link to="/users/1">User 1</Link>
                 </li>
                 <li>
                     <Link to="/users/2">User 2</Link>
                 </li>
                 <li>
                     <Link to="/users/3">User 3</Link>
                 </li>
             </ul>
        </>
    );

};

export default UsersPage;