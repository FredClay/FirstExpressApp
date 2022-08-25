const SearchBar = ({updateHandler, submitHandler, sendSearch}) => {

    return (
        <>
            <form onSubmit={submitHandler}>
            <input type="text" id="" placeholder="Enter Film Titles Here..." onChange={updateHandler}/>
            <button type="submit" onClick={sendSearch}>Search!</button>
            </form>
        </>
    );

};

export default SearchBar;