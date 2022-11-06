import { useContext } from "react"
import { CartContext } from "../../Context/Context"
import ItemCart from "../ItemCart/ItemCart"
import { Link } from "react-router-dom"
import './Cart.css'


const Cart = () => {

    const { cart, total, emptyCart, totalQuantity } = useContext(CartContext)

    if(totalQuantity === 0) {
        return( <h1>Carrito vacío</h1> )
    }    

    return (
        <div  >
            <h1>Carrito</h1>    
            {cart.map( (prod) => {
              return <ItemCart key={prod.id} {...prod} />
            })}
            <div className='cartContainer'>
                <h2>
                    Total ${total}
                </h2>
                <button className='cartContainer__btEmpty' onClick={ () => {emptyCart()} }>Limpiar Carrito</button>
                <Link to='/checkout'>Checkout</Link>
            </div>
        </div>
    )
}

export default Cart