import Cart from './Cart/Cart.svg'

const CartWidget = () => {
    return (
        <div
        style = {{
            display: "flex",
            alignItems: "center"
        }}
        >
            <img 
            src = {Cart}
            alt = 'CartWidget'
            />
            0
        </div>
    )
}

export default CartWidget;