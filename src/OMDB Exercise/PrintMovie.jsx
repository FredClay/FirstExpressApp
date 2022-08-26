import { Link, useNavigate } from 'react-router-dom';

const PrintMovie = (movie) => {

    const {Title, Year, Poster, id} = movie;

    const navigate = useNavigate();

    return (
        <div>
            <h2>{Title}</h2>
            <h3>Release Year: {Year}</h3>
            <img src={Poster} alt={`${Title} poster`}></img>
            <button onClick={() => navigate(`/details/${id}`)}>Details</button>
            <hr></hr>
        </div>
    )

};
export default PrintMovie;