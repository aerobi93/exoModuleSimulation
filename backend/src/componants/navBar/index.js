import React from "react";
import { Link } from "react-router-dom";
import './styles.scss'

const NavBar = () => (
    <nav className="nav">
        <ol className="nav__ol">
            <Link to='/newModule' className='nav__link' > ajouter un module</Link>
            <Link to='/' className='nav__link' > list des module</Link>
            <Link to='/logs' className='nav__link' > voir tous les log</Link>
            <Link to='/measures' className='nav__link' > voir tous les mesures</Link>
        </ol>
    </nav>
)

export  default NavBar