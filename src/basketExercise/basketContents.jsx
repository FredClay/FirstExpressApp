const BasketItems = ({ allItems, deleteHandler }) => {
    
    const PrintItem = ({itemName, id}) => <li> 
        ID: {id} ----- Item Name: {itemName} 
        <button onClick={() => deleteHandler(id)}>X</button>
        </li>

    return (
        <>
        <ul>
            {allItems.map((itemName, index) => {
                return (<PrintItem itemName={itemName} key={index} id={index}/>);
            })}
        </ul>
        </>
    )
};

export default BasketItems;