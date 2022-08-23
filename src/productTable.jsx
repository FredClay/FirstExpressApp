import { useState } from "react";
import productData from "./products.json";

const ProductTable = () => {

    const [searchField, setSearchField] = useState('');
    
    const searchItems = () => {
        return productData.filter(product => product.name.toLowerCase().startsWith(searchField)).map(({name, season, year}) => <p key={name}>{name}, {season}, {year}.</p>)
    };

    return (
        <>
            <h2>Search</h2>
            <label htmlFor="searchField">Search for products here: </label>
            <input type="id" id="searchField" onChange={e => setSearchField(e.target.value)}></input>
            <hr></hr>
            <h3>Results:</h3>
            {searchItems()}
        </>
    )

};

export default ProductTable;