import Cart from './cartAsset/Cart.svg'
import { useContext } from 'react';
import { CartContext } from '../../Context/Context';
import { Link } from 'react-router-dom';


const CartWidget = () => {

    const { totalQuantity } = useContext(CartContext)
    let Qty = totalQuantity

    return (
        <Link
        style = {{
            display: "flex",
            alignItems: "center"
        }}
        to='/cart'
        >
            <img 
            src = {Cart}
            alt = 'CartWidget'
            />
            {Qty}
        </Link>
    )
}

export default CartWidget;