import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./ReviewItem.css";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
const ReviewItem = ({ product, handleRemoveItem }) => {
  const { name, price, quantity, img, shipping, id } = product;
  return (
    <div className="review-item">
      <img src={img} alt="name" />
      <div className="item-info">
        <div className="item-content">
          <p>{name}</p>
          <p>
            Price: <span>${price}</span>
          </p>
          <p>
            Shipping: <span>${shipping}</span>
          </p>
          <p>
            Quantity: <span>{quantity}</span>
          </p>
        </div>
        <button onClick={()=>handleRemoveItem(id)}>
          <FontAwesomeIcon icon={faTrashAlt} />
        </button>
      </div>
    </div>
  );
};

export default ReviewItem;
