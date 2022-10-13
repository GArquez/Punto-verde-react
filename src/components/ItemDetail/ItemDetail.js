import './ItemDetail.css'
import Counter from '../Counter/Counter'


const ItemDetail = ({id, name, price, category, img, description}) => {

    const handleAdd = () => {
        const productToAdd = {
            id, name, price
        }
        console.log(productToAdd)
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
                <Counter Add={handleAdd} />
            </footer>
        </div>
    )
}

export default ItemDetail