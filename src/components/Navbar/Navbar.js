import './Navbar.css'
import logo from './logo/logo.jpg'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <header className='Nav'>
            <Link to={'/'}>
                <img 
                className='Nav__logo'
                src={logo} 
                alt='Punto Verde logo' 
                />
            </Link>                 
            <nav className='Nav__bar'>
                <Link to={'/categories/fruta'}>
                    Frutas
                </Link>
                <Link to={'/categories/verdura'}>
                    Verduras
                </Link>
            </nav>
            <CartWidget />   
        </header>
    )
}

export default Navbar;