import { useState } from "react";
import axios from 'axios';

import SearchBar from "./SearchBar";
import PrintAllMovies from "./PrintAllMovies";

const HomePage = () => {

    const [searchField, setSearchField] = useState('');
    const [foundMovies, setFoundMovies] = useState([]);

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
                console.log(response);
                setFoundMovies(response.data);
                console.log(foundMovies);
            })
            .catch(err => console.log(err))
    };

    console.log(foundMovies);

    return (
        <>
            <SearchBar updateHandler={updateHandler} submitHandler={submitHandler} sendSearch={sendSearch} />
            <hr></hr>
            <PrintAllMovies movies={foundMovies}/>
        </>
)

};

export default HomePage;