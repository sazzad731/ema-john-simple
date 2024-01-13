import './Card.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faTrash } from '@fortawesome/free-solid-svg-icons';

const Card = (props) => {
    const {cards} = props

    let total = 0;
    let shipping = 0;
    for(const product of cards){
        total = total + product.price
        shipping = shipping + product.shipping
    }
    const tax = (total * 0.1).toFixed(2);
    const grandTotal = total + shipping + parseFloat(tax);
    return (
        <div className="card-container">
            <h6>Order Summary</h6>
            <p>Selected Items: {cards.length}</p>
            <p>Total Price: ${total}</p>
            <p>Total Shipping Charge: ${shipping}</p>
            <p>Tax: ${tax}</p>
            <p className='total'>Grand Total: ${grandTotal.toFixed(2)}</p>
            <div className='btn-div'>
                <button className='btn-1'><span className='btn-text'>Clear Cart</span> <FontAwesomeIcon icon={faTrash}/></button>
                <button className='btn-2'><span className='btn-text'>Review Order</span> <FontAwesomeIcon icon={faArrowRight}/></button>
            </div>
         </div>
    );
};

export default Card;