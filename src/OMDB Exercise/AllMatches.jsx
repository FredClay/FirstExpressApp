import PrintMovie from "./PrintMovie";

const AllMatches = ({movies}) => {

    if (movies.length === 0) {
        return (
            <p>Movies will appear here if your search finds any!</p>
        )
    }

    return (
        <div id="matches">
            {movies.Search.map(({Title, Year, Poster, imdbID}) => 
                <PrintMovie key={imdbID} Title={Title} Year={Year} Poster={Poster} id={imdbID}/>
            )}
        </div>
    )

};

export default AllMatches;