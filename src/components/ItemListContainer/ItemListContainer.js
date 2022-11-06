import { useEffect, useState } from "react"
import './ItemListContainer.css'
import { getDocs, collection, query, where } from "firebase/firestore" 
import { db } from "../../services/firebase"
import ItemList from '../ItemList/ItemList'
import { useParams } from "react-router-dom"

const ItemListContainer = ({greeting}) => {

    const [products, setProducts] = useState([])
    const [loader, setLoader] = useState(true)

    const {categoryId} = useParams()

    useEffect (() => {
        setLoader(true)

        const collectionDb = categoryId ? query(collection(db, 'products'), where('category', '==', categoryId)) : collection(db, 'products')
        
        getDocs(collectionDb)
        .then( resp => {
            console.log(resp)
            console.log(resp.docs)
            let productsAdapted = resp.docs.map( doc => {
                const data = doc.data()
                
                return {id: doc.id, ...data}})
            setProducts(productsAdapted)
        })
        .catch( err => console.log(err) )
        .finally( () => setLoader(false) )
    }, [categoryId])
    
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