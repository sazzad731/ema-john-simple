import { useState } from "react";
import './OrderReview.css'
import { useLoaderData } from "react-router-dom";
import Card from "../Shop/Card/Card";
import ReviewItem from "../ReviewItem/ReviewItem";
import { removeFromDb, deleteShoppingCard } from "../../utilities/fakedb";


const OrderReview = () =>{
  const { initialCard } = useLoaderData()
  const [ cards, setCards ] = useState(initialCard)
  const handleRemoveItem = (id) =>{
    const remaining = cards.filter(product => product.id !== id);
    setCards(remaining);
    removeFromDb(id);
  }

  const clearCard = () => {
    setCards([]);
    deleteShoppingCard();
  };

  return (
    <div className="shop-container">
      <div className="orders-container">
        {cards.map((product) => (
          <ReviewItem
            product={product}
            handleRemoveItem={handleRemoveItem}
            key={product.id}
          />
        ))}
      </div>
      <Card clearCard={clearCard} cards={cards} />
    </div>
  );
};

export default OrderReview;