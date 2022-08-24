const AddItems = ({submitHandler, updateNameHandler, updateQuantityHandler, addHandler}) => {

    return (
        <form onSubmit={submitHandler}>
        <input type="text" placeholder="Type items here..." onChange={updateNameHandler}/>
        <input type="number" placeholder="Quantity..." min="0" onChange={updateQuantityHandler}/>
        <button type="button" onClick={addHandler}>Add Item!</button>
        </form>
    )

};

export default AddItems;