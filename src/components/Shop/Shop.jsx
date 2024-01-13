import { useState } from 'react';
import './Shop.css'
import { useEffect } from 'react';
import Product from './Product/Product';
import Card from './Card/Card';
import { addToDb, getStoredCard } from '../../utilities/fakedb';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cards, setCards] = useState([])

    useEffect(()=>{
        fetch("products.json")
        .then(res=>res.json())
        .then(data=>setProducts(data))
    }, [])

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
    }, [products, cards])

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