import { useEffect, useState } from "react"
import './ItemListContainer.css'
import { getProducts, getProductsCategory } from "../../asyncMock"
import ItemList from '../ItemList/ItemList'
import { useParams } from "react-router-dom"

const ItemListContainer = ({greeting}) => {

    const [products, setProducts] = useState([])
    const [loader, setLoader] = useState(true)

    const {category} = useParams()

    useEffect (() => {
        setLoader(true)

        const functionAsync = category ? getProductsCategory : getProducts
        
        functionAsync(category)
        .then( resp => setProducts(resp) )
        .catch( err => console.log(err) )
        .finally( () => setLoader(false) )
    }, [category])
    
    if(loader) {
        return (
            <h1>Cargando...</h1>
        )
    }

    return (
        <>
        <h1> {greeting} </h1>
            <div className="container">
                <ItemList products={products} />
            </div>
        </>    
    )
}

export default ItemListContainer