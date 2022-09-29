import './Navbar.css'
import logo from './logo/logo.jpg'
import Cart from '../CartWidget/Cart'

const Navbar = () => {
    return (
        <header className='Nav'>
                <img 
                className='Nav__logo'
                src={logo} 
                alt='Punto Verde logo' 
                />             
            <nav className='Nav__bar'>
                <button>
                    Frutas
                </button>
                <button>
                    Verduras
                </button>
                <button>
                    Combos
                </button>
            </nav>
            <Cart/>   
        </header>
    )
}

export default Navbar;