import {NavLink } from 'react-router-dom'

export default function Navbar(){
    return (
        <nav>
            <h1>Hacker News</h1>
            <div>
                <NavLink to= '/'>Top</NavLink>
                <NavLink to= '/new'>New</NavLink>
                <NavLink to= '/old'>Old</NavLink>

            </div>
        </nav>
    )
}
