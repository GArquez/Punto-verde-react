import { useContext, useState } from "react";
import { CartContext } from "../../Context/Context";
import { getDocs, collection, query, where, documentId, writeBatch, addDoc } from "firebase/firestore";
import { db } from "../../services/firebase";
import './Checkout.css'

const Checkout = () => {
    const {cart, total, emptyCart} = useContext(CartContext)
    const [buyerData, setBuyerData] = useState({
        name: '',
        email: '',
        phone: '',
    })

    const createOrder = async () => {

        try {
            const order = {
                buyer: {
                    name: buyerData.name,
                    phone: buyerData.phone,
                    email: buyerData.email
                },
                items: cart,
                total
            }

            const itemsIds = cart.map( prod => prod.id)

            const productsDb = collection(db, 'products')

            const productsToCompare = await getDocs(query(productsDb, where(documentId(), 'in', itemsIds)))

            const productsData =  productsToCompare.docs

            const batch = writeBatch(db)
            let noStock = []

            productsData.forEach( doc => {
                const data = doc.data()
                const stockDb = data.stock

                const productsAddedCart = cart.find( prod => prod.id === doc.id)
                const quantityProducts = productsAddedCart?.quantity
                if(stockDb >= quantityProducts) {
                    batch.update(doc.ref, {stock: stockDb - quantityProducts})
                } else {
                    noStock.push({ id: doc.id, ...data})
                }
            })
            if(noStock.length === 0) {
                await batch.commit()

                const orderRef = collection(db, 'orders')
                const addOrder = await addDoc(orderRef, order)

                emptyCart()
                alert(`Listo! el ID de su orden es: ${addOrder.id}`)
            } else {
                alert('Hay productos fuera de stock')
            }

        } catch (error) {
            console.log(error)
        }
    }

    return(
        <div className='containerCheck' >
            <h1>Checkout</h1>
            <form>
                <div className="containerCheck__inputs">
                    <label>Nombre</label>
                    <input type="text" value={buyerData.name}
                    onChange={({ target }) => setBuyerData({...buyerData, name: target.value})}>
                    </input>
                </div>
                <div className="containerCheck__inputs">
                    <label>E-mail</label>
                    <input type='email' value={buyerData.email}
                    onChange={({ target }) => setBuyerData({...buyerData, email: target.value})}>
                    </input>
                </div>
                <div className="containerCheck__inputs">
                    <label>Telefono</label>
                    <input type='number' value={buyerData.phone}
                    onChange={({ target }) => setBuyerData({...buyerData, phone: target.value})}>
                    </input>
                </div>
            </form>
            <button className="containerCheck__bt" onClick={createOrder}>Enviar Orden</button>
        </div>
    )
}

export default Checkout