import React from 'react'
import {NavLink} from 'react-router-dom'
import {FaPlay} from 'react-icons/fa'

const Header = () => (
    <header>
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark justify-content-between">
            <NavLink className="navbar-brand" to="/">
                <FaPlay className="d-inline-block align-top mr-3" />
                TMDb_Project
            </NavLink>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <NavLink className="nav-link" to="/" exact={true}>Accueil</NavLink>
                </li>
            </ul>
        </nav>
    </header>
)

export default Header