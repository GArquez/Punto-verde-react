import { useContext } from "react"
import { CartContext } from "../../Context/Context"
import './ItemCart.css'

const ItemCart = ({id, name, price, quantity}) => {
    const { removeItem } = useContext(CartContext)
    
    return(
        <div className='cartItem'>
            <header className="cartItem__header">
                <h2>{name}</h2>
            </header>
            <article className="cartItem__info">
                <section>
                    <p>Cantidad:{quantity}</p>
                </section>
                <section>
                    <p>Subotal: ${price * quantity}</p>
                </section>
            </article>
            <footer>
                <button className="buttonCartItem" onClick={() => {removeItem({id})}}>Quitar</button>
            </footer>
        </div>
    )
}

export default ItemCart