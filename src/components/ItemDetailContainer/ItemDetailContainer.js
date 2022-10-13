import ItemDetail from "../ItemDetail/ItemDetail"
import { useEffect, useState } from "react"
import { getProductId } from "../../asyncMock"
import './ItemDetailContainer.css'
import { useParams } from "react-router-dom"


const ItemDetailContainer = () => {
    const [productId, setProductId] = useState([])
    const [loader, setLoader] = useState(true)
    const {productForId} = useParams()

    useEffect(() => {
        setLoader(true)

        getProductId(productForId)
        .then((resp) => {
            setProductId(resp)
        })
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