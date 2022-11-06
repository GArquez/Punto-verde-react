import './ItemDetail.css'
import Counter from '../Counter/Counter'
import { useContext } from 'react'
import { CartContext } from '../../Context/Context'


const ItemDetail = ({id, name, price, category, img, description, stock}) => {

    const { addProduct, getQuantityOfProduct } = useContext(CartContext)

    const quantitySelected = getQuantityOfProduct(id)

    const handleAdd = (quantity) => {
        const productToAdd = {
            id, name, price, quantity
        }

        addProduct(productToAdd, quantity)
    }

    return (
        <div className="cardDetail">
            <header className="cardDetail__header">
                <h1>
                    {name}
                </h1>   
            </header>
            <div className="cardDetail__img">
                <img 
                src={img} 
                alt={name} 
                />
            </div>
            <main className='cardDetail__main'>
                <article>
                    Categoria: {category}
                </article>   
                <p> 
                    ${price} xKg
                </p>
                <article>
                    <p>
                        Descripcion: {description}
                    </p>
                </article>
            </main>
            <footer>
                <Counter Add={handleAdd} stock={stock} initial={quantitySelected} />
            </footer>
        </div>
    )
}

export default ItemDetail