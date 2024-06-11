import { getStoredCard } from "../utilities/fakedb";

export const productsAndCardLoader = async () =>{
  const productsData = await fetch("http://localhost:5000/products");
  const {products} = await productsData.json();

  // get card
  const savedCard = getStoredCard();
  const initialCard = []
  for (const id in savedCard){
    const addedProduct = products.find(product => product._id === id);
    if (addedProduct){
      const quantity = savedCard[ id ];
      addedProduct.quantity = quantity;
      initialCard.push(addedProduct);
    }
  }

  return {products: products, initialCard: initialCard};
}