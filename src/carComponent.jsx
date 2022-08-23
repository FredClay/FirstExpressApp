import { useState } from "react";

const Car = () => {

    const [brand, setBrand] = useState('Mercedes');
    const [model, setModel] = useState('W11');
    const [colour, setColour] = useState('Black');
    const [year, setYear] = useState(2020);

    return (
        <>
        <p>Brand: {brand}</p>
        <p>Model: {model}</p>
        <p>Colour: {colour}</p>
        <p>Year: {year}</p>

        <hr></hr>
        <h2>Update your car here:</h2>
        <form>
            <label htmlFor="carBrand">Brand:</label>
            <input type="text" id="carBrand" value={brand} onChange={e => setBrand(e.target.value)}/>
            <br/>
            <label htmlFor="carModel">Model:</label>
            <input type="text" id="carModel" value={model} onChange={e => setModel(e.target.value)}/>
            <br/>
            <label htmlFor="carColour">Colour:</label>
            <input type="text" id="carColour" value={colour} onChange={e => setColour(e.target.value)}/>
            <br/>
            <label htmlFor="carYear">Year:</label>
            <input type="number" id="carYear" min="1950" value={year} onChange={e => setYear(e.target.value)}/>
            <br/>
        </form>

        </>
    )

};

export default Car;