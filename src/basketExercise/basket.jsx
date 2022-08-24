import { useState } from "react";
import AddItems from "./addItems";
import BasketItems from "./basketContents";
import BasketEditor from "./basketEditor";

const Basket = () => {

    const [contents, setContents] = useState([]);
    const [itemName, setItemName] = useState('');
    const [itemQuantity, setItemQuantity] = useState(0);
    const [editorVisible, setEditorVisible] = useState(false);

    const submitHandler = (event) => {
        event.preventDefault();
    }

    const handleUpdate = ({target}) => {
        setItemName(target.value);
    };

    const  handleQuantityUpdate = ({target}) => {
        setItemQuantity(target.value);
    }

    const handleEditToggle = () => {
        setEditorVisible(!editorVisible);
        console.log(editorVisible);
    }

    const handleAdd = () => {
        setContents(contents => [...contents, {name: itemName, quantity: itemQuantity}])
    }

    const handleDelete = (id) => {
        const tempContents = [...contents];
        console.log(id);
        tempContents.splice(id, 1);
        setContents(tempContents)
    }

    const handleEditItem = (idToEdit, newName, newQuantity) => {
        if (idToEdit < contents.length) {
            console.log("i have been summoned");
            console.log(idToEdit);
            const tempContents = [...contents];
            tempContents[idToEdit] = {name: newName, quantity: newQuantity};
            setContents(tempContents);
        }
        else {
            console.log("Index out of range");
        }

    }

    return (
        <>
        <h2>Add your items to your basket:</h2>
        <AddItems submitHandler={submitHandler} addHandler={handleAdd} 
            updateNameHandler={handleUpdate} updateQuantityHandler={handleQuantityUpdate}/>
        <hr></hr>
        <h3>Edit existing items</h3>
        <button type="button" onClick={handleEditToggle}>Toggle Edit Mode</button>
        {/* work in progress */}
        <BasketEditor visible={editorVisible} editHandler={handleEditItem} maxID={contents.length-1}/>
        <hr></hr>
        <h3>Your basket: </h3>
        <BasketItems allItems={contents} deleteHandler={handleDelete}/>
        </>
    )

};

export default Basket;