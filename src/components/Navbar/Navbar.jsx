import React from 'react'

function Navbar() {
    return (
        <nav className='nav'>
            <div className="nav__logo">
                μTech
            </div>
            <ul className='nav__list'>
                <li className="nav__list-item">Home</li>
                <li className="nav__list-item">About us</li>
                <li className="nav__list-item">Servise</li>
                <li className="nav__list-item">Our projects</li>
                <li className="nav__list-item">Contact us</li>
            </ul>
        </nav>
    )
}

export default Navbar
