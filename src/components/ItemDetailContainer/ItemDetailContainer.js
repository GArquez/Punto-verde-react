import ItemDetail from "../ItemDetail/ItemDetail"
import { useEffect, useState } from "react"
import { getDoc, doc } from "firebase/firestore"
import { db } from "../../services/firebase"
import './ItemDetailContainer.css'
import { useParams } from "react-router-dom"


const ItemDetailContainer = () => {
    const [productId, setProductId] = useState([])
    const [loader, setLoader] = useState(true)
    
    const {productForId} = useParams()

    useEffect(() => {
        setLoader(true)

        const docDb = doc(db, 'products', productForId)

        getDoc(docDb)
        .then((resp) => {
            console.log(resp)
            const data = resp.data()
            const productAdapted = {id: resp.id, ...data}

            setProductId(productAdapted)
            })
        .catch((error) => console.log(error))
        .finally(() => setLoader(false))
    }, [productForId])
    if(loader) {
        return (
            <h1>Cargando...</h1>
        )
    }

    return (
        <div className = 'IDContainer'>
            <ItemDetail {...productId} />
        </div>
    )
}

export default ItemDetailContainer