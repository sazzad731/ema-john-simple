import { useState } from "react";
import "./Shop.css";
import { useEffect } from "react";
import Product from "./Product/Product";
import Card from "./Card/Card";
import {
  addToDb,
  getStoredCard,
  deleteShoppingCard,
} from "../../utilities/fakedb";
// import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Shop = () => {
  // const { products, count } = useLoaderData();
  const [ products, setProducts ] = useState([]);
  const [count, setCount] = useState(0)
  const [cards, setCards] = useState([]);
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(10);
  const pages = Math.ceil(count / size);

  useEffect(()=>{
    const url = `http://localhost:5000/products?page=${page}&size=${size}`;
    fetch(url)
      .then(res => res.json())
      .then(data =>{
        setCount(data.count);
        setProducts(data.products)
      })
  }, [page, size])

  const clearCard = () => {
    setCards([]);
    deleteShoppingCard();
  };

  useEffect(() => {
    const storedCard = getStoredCard();
    const savedCard = [];
    const ids = Object.keys(storedCard);

    fetch("http://localhost:5000/productsByIds", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(ids),
    })
      .then((res) => res.json())
      .then((data) => {
        for (const id in storedCard) {
          const addedProduct = data.find((product) => product._id === id);
          if (addedProduct) {
            const quantity = storedCard[id];
            addedProduct.quantity = quantity;
            savedCard.push(addedProduct);
          }
        }
        setCards(savedCard);
      });
  }, [products]);

  const addToCard = (selectedProduct) => {
    let newCard = [];
    const exist = cards.find((product) => product._id === selectedProduct._id);
    if (!exist) {
      selectedProduct.quantity = 1;
      newCard = [...cards, selectedProduct];
    } else {
      const rest = cards.filter(
        (product) => product._id !== selectedProduct._id
      );
      exist.quantity = exist.quantity + 1;
      newCard = [...rest, exist];
    }
    setCards(newCard);
    addToDb(selectedProduct._id);
  };

  return (
    <div className="shop-container">
      <div className="shoping-container">
        {products.map((product) => (
          <Product addToCard={addToCard} product={product} key={product._id} />
        ))}
      </div>
      <Card clearCard={clearCard} cards={cards}>
        <Link className="btn-2" to="/order-review">
          <span className="btn-text">Review Order</span>
          <FontAwesomeIcon icon={faArrowRight} />
        </Link>
      </Card>

      <div className="pagination">
        <p>
          currently selected page {page} and loaded data {size}
        </p>
        <form style={{ display: "flex", marginBottom: "10px" }}>
          <label htmlFor="dataSize">Loade data per bage</label>
          <select
            id="dataSize"
            onChange={(event) => setSize(event.target.value)}
          >
            <option value="5">5</option>
            <option value="10" selected>
              10
            </option>
            <option value="15">15</option>
            <option value="20">20</option>
          </select>
        </form>
        <div>
          {[...Array(pages).keys()].map((number) => (
            <button
              className={`btn ${page === number && "selected"}`}
              key={number}
              onClick={() => setPage(number)}
            >
              {number + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
