import { useState } from 'react';
import './Shop.css'
import { useEffect } from 'react';
import Product from './Product/Product';
import Card from './Card/Card';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cards, setCards] = useState([])

    useEffect(()=>{
        fetch("products.json")
        .then(res=>res.json())
        .then(data=>setProducts(data))
    }, [])

    const addToCard = (product)=>{
        console.log(product)
        const newCard = [...cards, product];
        setCards(newCard);
    }




    return (
        <div className='shop-container'>
            <div className="shoping-container">
                {
                    products.map(product => <Product addToCard={addToCard} product={product} key={product.id}/>)
                }
            </div>
            <Card cards={cards}/>
        </div>
    );
};

export default Shop;