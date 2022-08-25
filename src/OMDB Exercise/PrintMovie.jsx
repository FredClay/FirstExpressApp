const PrintMovie = (movie) => {

    const {Title, Year, Poster, id} = movie;

    return (
        <div>
            <h2>Title: {Title}</h2>
            <h3>Release Year: {Year}</h3>
            <img src={Poster} alt={`${Title} poster`}></img>
            <button onClick={() => console.log(id)}>Details</button>
            <hr></hr>
        </div>
    )

};
export default PrintMovie;