import './NavbarStyle.scss'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <nav className='nav'>
            <div className="nav__logo">
                <Link to='/' className='link'>
                    μTech
                </Link>
            </div>
            <ul className='nav__list'>
                <li className="nav__list-item">
                    <Link to='/' className='link'>
                        Home
                    </Link>
                </li>
                <li className="nav__list-item">
                    <Link to='about' className='link'>
                        About us
                    </Link>
                </li>
                <li className="nav__list-item">
                    <Link to='service' className='link'>
                        Service
                    </Link>
                </li>
                <li className="nav__list-item">
                    <Link to='/projects' className='link'>
                        Our projects
                    </Link>
                </li>
                {/* <li className='nav__list-item'>
                    <select name="" id="">
                        <option value="">Uzbek</option>
                        <option value="">English</option>
                        <option value="">Russian</option>
                    </select>
                </li> */}
                <li className="nav__list-item">
                    <button className='nav__list-item-btn'>
                        <Link to='/contact' className='link'>
                            Contact us
                        </Link>
                    </button>
                </li>
            </ul>
            <i className="fa-solid fa-bars"></i>
        </nav>
    )
}

export default Navbar
