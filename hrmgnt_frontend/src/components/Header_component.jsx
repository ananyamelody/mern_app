import './Header_com.css'

import { Link } from 'react-router-dom'
function Header_component(){
    return(
        <div>
            <div class="header">
            <Link to="/"> Home </Link>
            <Link to="/about"> About us </Link>
            <Link to="/contact"> Contact </Link>
            </div>

        </div>
    )
}

export default Header_component