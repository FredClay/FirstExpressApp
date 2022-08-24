import { useState } from "react";
import AddItems from "./addItems";
import BasketItems from "./basketContents";

const Basket = () => {

    const [contents, setContents] = useState([]);
    const [itemName, setItemName] = useState('');
    const [ItemQuantity, setItemQuantity] = useState(0);

    const submitHandler = (event) => {
        event.preventDefault();
    }

    const handleUpdate = ({target}) => {
        setItemName(target.value);
    };

    const  handleQuantityUpdate = ({target}) => {
        setItemQuantity(target.value);
    }

    const handleAdd = () => {
        setContents(contents => [...contents, {name: itemName, quantity: ItemQuantity])
    }

    const handleDelete = (id) => {
        const tempContents = [...contents];
        console.log(id);
        tempContents.splice(id, 1);
        setContents(tempContents)
    }

    return (
        <>
        <AddItems submitHandler={submitHandler} addHandler={handleAdd} 
            updateNameHandler={handleUpdate} updateQuantityHandler={handleQuantityUpdate}/>
        <BasketItems allItems={contents} deleteHandler={handleDelete}/>
        </>
    )

};

export default Basket;