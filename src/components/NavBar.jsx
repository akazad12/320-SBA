import {NavLink } from 'react-router-dom'
import "./NavBar.css"

export default function Navbar(){
    return (
        <nav className = "navbar">
            <h1 className = "navbar-logo">Hacker News</h1>
            <div className = "navbar-links">
                <NavLink to= '/top'>Top</NavLink>
                <NavLink to= '/new'>New</NavLink>
                <NavLink to= '/best'>Best</NavLink>
                <NavLink to= '/'>SearchTopic</NavLink>
                <NavLink ></NavLink>

            </div>
        </nav>
    )
}
