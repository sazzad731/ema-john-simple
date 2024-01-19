import './Header.css'
import logo from '../../../images/Logo.svg';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='nav-bar'>
            <img src={logo} alt="Logo" />
            <div className='nav-link'>
                <Link to="/orders">Order</Link>
                <Link to="/order-review">Order Review</Link>
                <Link to="/manage-inventory">Manage Inventory</Link>
                <Link to="/login">Login</Link>
            </div>
        </nav>
    );
};

export default Header;