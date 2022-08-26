import { Link } from 'react-router-dom';

const PrintMovie = (movie) => {

    const {Title, Year, Poster, id} = movie;

    return (
        <div>
            <h2>{Title}</h2>
            <h3>Release Year: {Year}</h3>
            <img src={Poster} alt={`${Title} poster`}></img>
            <Link to={`/details/${id}`}>
                <button>Details</button>
            </Link>
            <button onClick={() => console.log(id)}>Log ID</button>
            <hr></hr>
        </div>
    )

};
export default PrintMovie;