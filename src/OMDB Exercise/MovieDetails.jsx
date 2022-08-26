import axios from 'axios';
import { useEffect, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import FocusPrintMovie from './FocusPrintMovie';

const MovieDetails = () => {

    const {id} = useParams();
    console.log("This ID: " + id);

    const [focusMovie, setFocusMovie] = useState('');

    const navigate = useNavigate();
    const location = useLocation();

    const baseURL = 'http://www.omdbapi.com/?apikey=';
    const apiKey = '2d739df9';

    useEffect(() => {
        axios
            .get(baseURL + apiKey + "&i=" + id)
            .then(response => {
                console.log(response);
                setFocusMovie(response.data)
                console.log(focusMovie);
            })
            .then(() => {
                for (let element in focusMovie) {
                    console.log(`${element}: ${focusMovie[element]}`);
            }})
            .catch(err => console.log("Error:- " + err));
    }, [id]);

    return (
        <>
            
            <button onClick={() => navigate("/", {state:{oldSearch: location.state.oldSearch}})}>GO BACK</button>
            <hr></hr>
            <div id="result">
                <img src={focusMovie.Poster} alt={`${focusMovie.Title} poster`}></img>
                <h2><u>{focusMovie.Title}</u></h2>
                
                <FocusPrintMovie movie={focusMovie}/>
                
                {/* <ul>
                    {Object.keys(focusMovie).map(key => <li>{`${key}: ${focusMovie[key]}`}</li>)}
                </ul> */}
            </div>
        </>
    );

};

export default MovieDetails;