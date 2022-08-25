import { useEffect, useState } from "react";
import axios from 'axios';
import MovieFormatter from "./MovieFormatter";

const ConstantSearch = () => {

    const[movieInput, setMovieInput] = useState('')
    const [movie, setMovie] = useState('');
    
    const apiKey = '2d739df9';

    useEffect(() => {
        axios
            .get('http://www.omdbapi.com/?apikey=' + apiKey + '&t=' + movieInput)
            .then(response => {
                console.log("Sending request");
                setMovie(response.data);
                console.log(movie);
            })
            .catch(err => console.log(err))
    }, [movieInput])

    const clearSearchBar = () => {
        console.log("Clearing Search Bar");
        setMovieInput('');
    }

    const submitHandler = (event) => {
        event.preventDefault();
    }

    return (
        <>
            <h1>Search for a movie!</h1>
            <form onSubmit={submitHandler}>
            <label htmlFor="movieField">Enter Movie Here</label>
            <input type="text" id="movieField" value={movieInput} onChange={e => setMovieInput(e.target.value)}/>
            <br></br>
            <button type="button" onClick={clearSearchBar}>Clear Search</button>
            </form>
            <hr></hr>
            <MovieFormatter movie={movie}/>
        </>
    )

};

export default ConstantSearch;