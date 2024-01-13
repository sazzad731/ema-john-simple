import './Header.css'
import logo from '../../../images/Logo.svg';

const Header = () => {
    return (
        <nav className='nav-bar'>
            <img src={logo} alt="Logo" />
            <div className='nav-link'>
                <a href="/orders">Order</a>
                <a href="/order-review">Order Review</a>
                <a href="/manage-inventory">Manage Inventory</a>
                <a href="/login">Login</a>
            </div>
        </nav>
    );
};

export default Header;