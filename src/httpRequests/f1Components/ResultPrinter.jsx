import F1DriverPrinter from "./F1DriverPrinter"
import F1TeamPrinter from "./F1TeamPrinter"

const ResultPrinter = ({teamOrDriver, dataSet}) => {
    
    if (dataSet === undefined) return (
        <p>Valid results will be displayed here.</p>
    );
    
    if (teamOrDriver) {
        return (
            <>
                {dataSet.map(({_id, name, nationality, age}) => 
                <F1DriverPrinter key={_id} name={name} nationality={nationality} age={age}/>)}
            </>
        )
    } else {
        return (
            <>
                {dataSet.map(({_id, name, homeCountry, teamPrincipal, yearFounded}) => 
                <F1TeamPrinter key={_id} name={name} homeCountry={homeCountry} teamPrincipal={teamPrincipal} yearFounded={yearFounded}/>)}
            </>
        )
    }

};

export default ResultPrinter;