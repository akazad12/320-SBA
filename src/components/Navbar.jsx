import {Link} from "react-router-dom";

function Navbar(){
    return(
        <nav className = "navbar">
            <h1>new Dashboard</h1>
            <div>
                {/* <Link to='/'>Home</Link> */}
                {/* <Link to='saved'>Saved news</Link> */}
            </div>
        </nav>
    )
}

export default Navbar;