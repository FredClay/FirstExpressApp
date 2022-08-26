import { useState } from "react";
import axios from 'axios';

import SearchBar from "./SearchBar";
import AllMatches from "./AllMatches";
import { useLocation } from "react-router-dom";

const HomePage = () => {

    const location = useLocation();

    const [searchField, setSearchField] = useState('');
    const [foundMovies, setFoundMovies] = useState([]);

    // location?.state?.searchField


    const baseURL = 'http://www.omdbapi.com/?apikey=';
    const apiKey = '2d739df9';

    const updateHandler = (e) => {
        setSearchField(e.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();
    };

    const sendSearch = () => {
        axios
            .get(baseURL + apiKey + '&s=' + searchField)
            .then(response => {
                setFoundMovies(response.data);
            })
            .catch(err => console.log(err))
    };

    return (
        <>
            <SearchBar updateHandler={updateHandler} submitHandler={submitHandler} sendSearch={sendSearch} />
            <hr></hr>
            <AllMatches movies={foundMovies}/>
        </>
)

};

export default HomePage;