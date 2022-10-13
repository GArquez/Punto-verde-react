import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({id, name, price, img}) => {
    return (
        <div className="card">
            <header className="card__header">
                <h1>
                    {name}
                </h1>   
            </header>
            <div className="card__img">
                <img 
                src={img} 
                alt={name} 
                />
            </div>
            <main>
                <p> 
                    ${price} xKg
                </p>
            </main>
            <footer>
                <Link 
                to={`/detail/${id}`}>
                    Ver detalle
                </Link>
            </footer>
        </div>
    )
}

export default Item