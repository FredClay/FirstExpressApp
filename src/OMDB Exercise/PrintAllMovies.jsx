const PrintAllMovies = ({movies}) => {

    console.log(movies);

    if (movies.length === 0) {
        return (
            <p>Movies will appear here if your search finds any!</p>
        )
    }

    return (
        <>
            {movies.Search.map(({Title, Year, Poster}) => 
                <>
                <h2>Title: {Title}</h2>
                <h3>Release Year: {Year}</h3>
                <img src={Poster} alt={`${Title} poster`}></img>
                </>
            )}
        </>
    )

};

export default PrintAllMovies;