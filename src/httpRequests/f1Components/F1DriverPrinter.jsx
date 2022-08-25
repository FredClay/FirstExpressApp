const F1DriverPrinter = ({name, nationality, age}) => {

    return (
        <>
            <h2>{name}</h2>
            <h3><u>Nationality:</u> {nationality}</h3>
            <h3><u>Age</u>: {age}</h3>
            <hr></hr>
        </>
    )

}

export default F1DriverPrinter;