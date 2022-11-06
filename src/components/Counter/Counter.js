import { useState } from "react"
import './Counter.css'

const Counter = ({ stock, Add, initial = 1 }) => {

    
    const [quantity, setQuantity] = useState(initial)

    const sumar = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1)
        }
    }

    const restar = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    return (
        <div className='Counter'>          
            <div className='Controls'>
                <button className="Button" onClick={restar}>-</button>
                <h4 className='Number'>{quantity}</h4>
                <button className="Button" onClick={sumar}>+</button>
            </div>
            <div>
                <button className="Button" onClick={() => Add(quantity)}>Agregar al carrito</button>
            </div>
       </div>
    )
}

export default Counter