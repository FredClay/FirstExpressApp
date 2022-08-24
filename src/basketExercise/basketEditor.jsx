import { useState } from "react"

const BasketEditor = ({visible, editHandler, maxID}) => {

    const [idField, setIdField] = useState(0);
    const [nameField, setNameField] = useState('');
    const [quantityField, setQuantityField] = useState(0);

    const updateIdField = ({target}) => {
        setIdField(target.value)
    };

    const updateNameField = ({target}) => {
        setNameField(target.value)
    };
    
    const updateQuantityField = ({target}) => {
        setQuantityField(target.value)
    };
    
    
    if (!visible) {
        return null;
    }
    else return (
        <>
        <form>
            <label htmlFor="editID">Which Item?  </label>
            <input id="editID" type="number" placeholder="ID?" min="0" max={maxID} onChange={updateIdField}/>
            <br></br>
            <label htmlFor="editName">New Name: </label>
            <input id="editName" type="text" placeholder="Name goes here" onChange={updateNameField}/>
            <br></br>
            <label htmlFor="editQuantity">New Quantity: </label>
            <input id="editQuantity" type="number" placeholder="Quantity goes here" onChange={updateQuantityField}/>
            <br></br>
            <button type="button" onClick={() => editHandler(idField, nameField, quantityField)}>Edit chosen item</button>
        </form>
        </>
    )

}

export default BasketEditor;