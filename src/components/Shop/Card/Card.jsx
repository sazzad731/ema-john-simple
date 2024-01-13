import './Card.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faTrash } from '@fortawesome/free-solid-svg-icons';

const Card = (props) => {
    const {cards} = props
    return (
        <div className="card-container">
            <h6>Order Summary</h6>
            <p>Selected Items: {cards.length}</p>
            <p>Total Price: $</p>
            <p>Total Shipping Charge: $5</p>
            <p>Tax: $114</p>
            <p className='total'>Grand Total: $1559</p>
            <div className='btn-div'>
                <button className='btn-1'><span className='btn-text'>Clear Cart</span> <FontAwesomeIcon icon={faTrash}/></button>
                <button className='btn-2'><span className='btn-text'>Review Order</span> <FontAwesomeIcon icon={faArrowRight}/></button>
            </div>
         </div>
    );
};

export default Card;