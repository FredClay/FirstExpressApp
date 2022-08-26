const FocusPrintMovie = (movie) => {

    const details = movie.movie;

    const desiredKeys = ['Title', 'Year', 'Director', 'Actors', 'Runtime', 'BoxOffice', 'Metascore', 'Country', 'Plot'];
    if (movie === undefined) {
        return null;
    }
    else {
        return (
            <ul>
                {desiredKeys.map(key => <li>{`${key}: ${details[key]}`}</li>)}
            </ul>
        )
    }

};

export default FocusPrintMovie;