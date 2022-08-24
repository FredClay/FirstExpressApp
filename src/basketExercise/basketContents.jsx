const BasketItems = ({ allItems, deleteHandler }) => {
    
    const PrintItem = ({itemName, itemQuantity, id}) => <li> 
        ID: {id} ----- Item Name: {itemName} ----- Quantity: {itemQuantity}
        <button onClick={() => deleteHandler(id)}>X</button>
        </li>

    return (
        <>
        <ul>
            {allItems.map(({name, quantity}, index) => {
                return (<PrintItem itemName={name} itemQuantity={quantity} key={index} id={index}/>);
            })}
        </ul>
        </>
    )
};

export default BasketItems;