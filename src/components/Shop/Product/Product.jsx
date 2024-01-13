import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Product.css'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Product = (props) => {
    const {product, addToCard} = props;
    const {img, name, price, seller, ratings} = product;
    return (
        <div className='product-container'>
            <div className='product'>
                <img src={img} alt="Product" />
                <p className='pro-name'>{name}</p>
                <p className='pro-price'>Price: ${price}</p>
                <p>Manufacturer: {seller}</p>
                <p>Rating: {ratings}star</p>
            </div>
                <button onClick={()=>addToCard(product)} className='pro-btn'><span>Add to Cart</span> <FontAwesomeIcon icon={faShoppingCart}/></button>
        </div>
    );
};

export default Product;