import { useState } from 'react';
import './Shop.css'
import { useEffect } from 'react';
import Product from './Product/Product';
import Card from './Card/Card';
import {
  addToDb,
  getStoredCard,
  deleteShoppingCard,
} from "../../utilities/fakedb";
import { useLoaderData } from 'react-router-dom';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Shop = () => {
    const products = useLoaderData();
    const [cards, setCards] = useState([])

    const clearCard = ()=>{
        setCards([])
        deleteShoppingCard()
    }

    useEffect(()=>{
        const storedCard = getStoredCard();
        const savedCard = [];
        for(const id in storedCard){
            const addedProduct = products.find(product => product.id === id);
            if(addedProduct){
                const quantity = storedCard[id];
                addedProduct.quantity = quantity
                savedCard.push(addedProduct);
            }
        }
        setCards(savedCard)
    }, [products])

    const addToCard = (selectedProduct)=>{
        let newCard = [];
        const exist = cards.find(product => product.id === selectedProduct.id);
        if(!exist){
            selectedProduct.quantity = 1;
            newCard = [...cards, selectedProduct];
        }else{
            const rest = cards.filter((product)=>product.id !== selectedProduct.id);
            exist.quantity = exist.quantity + 1;
            newCard = [...rest, exist]
        }
        setCards(newCard);
        addToDb(selectedProduct.id)
    }




    return (
      <div className="shop-container">
        <div className="shoping-container">
          {products.map((product) => (
            <Product addToCard={addToCard} product={product} key={product.id} />
          ))}
        </div>
        <Card clearCard={clearCard} cards={cards}>
          <Link className="btn-2" to="/order-review">
            <span className="btn-text">Review Order</span>
            <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        </Card>
      </div>
    );
};

export default Shop;