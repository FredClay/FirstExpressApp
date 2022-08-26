import PrintMovie from "./PrintMovie";

const AllMatches = ({movies, oldSearch}) => {

    const {Search} = movies;

    if (Search === undefined) {
        return (
            <div id="matches">
                <p>Searches must be at least 3 characters long.</p>
                <p>Movies will appear here if your search finds any!</p>
            </div>
        )
    }

    return (
        <div id="matches">
            {Search.map(({Title, Year, Poster, imdbID}) => 
                <PrintMovie key={imdbID} Title={Title} Year={Year} Poster={Poster} id={imdbID} oldSearch={oldSearch}/>
            )}
        </div>
    )

};

export default AllMatches;