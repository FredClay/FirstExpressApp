const F1TeamPrinter = ({name, homeCountry, teamPrincipal, yearFounded}) => {

    return (
        <>
            <h2>{name}</h2>
            <h3><u>Home Country:</u> {homeCountry}</h3>
            <h3><u>Team Pricipal</u>: {teamPrincipal}</h3>
            <h4>Founding Year: {yearFounded}</h4>
            <hr></hr>
        </>
    )

}

export default F1TeamPrinter;