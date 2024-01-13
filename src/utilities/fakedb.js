// use local storage to manage card data
const addToDb = id => {
    let shoppingCard = getShoppingCard();
    // add quantity
    const quantity = shoppingCard[id];
    if (!quantity) {
        shoppingCard[id] = 1;
    }
    else {
        const newQuantity = quantity + 1;
        shoppingCard[id] = newQuantity;
    }
    localStorage.setItem('shopping-card', JSON.stringify(shoppingCard));
}

const getStoredCard = ()=>{
    let shoppingCard = {};

    //get the shopping card from local storage
    const storedCard = localStorage.getItem('shopping-card');
    if (storedCard) {
        shoppingCard = JSON.parse(storedCard);
    }
    return shoppingCard;
}

const removeFromDb = id => {
    const shoppingCard = getShoppingCard();
    if (id in shoppingCard) {
        delete shoppingCard[id];
        localStorage.setItem('shopping-card', JSON.stringify(shoppingCard));
    }
}

const getShoppingCard = () => {
    let shoppingCard = {};

    //get the shopping card from local storage
    const storedCard = localStorage.getItem('shopping-card');
    if (storedCard) {
        shoppingCard = JSON.parse(storedCard);
    }
    return shoppingCard;
}

const deleteShoppingCard = () => {
    localStorage.removeItem('shopping-card');
}

export {
    addToDb,
    getStoredCard,
    removeFromDb,
    getShoppingCard,
    deleteShoppingCard
}
