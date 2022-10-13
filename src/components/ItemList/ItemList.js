import Item from "../Item/Item"

const ItemList = ( {products} ) => {
    return (
        <>
            {products.map( (el) => <Item key = {el.id} {...el} /> )}
        </>
    )
}

export default ItemList