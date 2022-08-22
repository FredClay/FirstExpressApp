const FellowshipMember = (props) => {
    return (
        <>
        <hr></hr>
        <h1>{props.name}</h1>
        <p>{props.content}</p>
        <p>{props.number} rings were made for the dwarf-lords.</p>
        <p>Other stuff?..</p>
        </>
    );
};



export default FellowshipMember;