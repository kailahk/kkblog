import './NavBar.css'
import { Link } from 'react-router-dom'

export default function NavBar() {
    return (
        <nav>
            <Link to="/somepage">Some Page</Link>
            &nbsp;|&nbsp;
            <Link to="/search">Search Repos</Link>
        </nav>
    )
}