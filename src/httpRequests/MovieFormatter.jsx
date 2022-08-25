const MovieFormatter = ({movie}) => {

    const {Title, Year, Actors, Poster, Response} = movie;
    
    if (Response === 'True') {
        return (
            <>
                <h1>{Title}</h1>
                <h3>Released: {Year}</h3>
                <h4>Starring:</h4>
                <p>{Actors}</p>
                <img src={Poster} alt={`${Title} poster`}></img>
            </>
        )
    } else {
        return <h2>No movie matching your search.</h2>
    }


    
}

export default MovieFormatter;