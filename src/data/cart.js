const addToCart = (product) => {
    let cart = getCart()
    cart.push(product)
    localStorage.setItem('cart', JSON.stringify(cart))
    console.log(localStorage.getItem('cart'))
}

const getCart = () => {
    const cart = localStorage.getItem('cart')
    if (cart) {
        return JSON.parse(cart)
    } else {
        return []
    }
}

const clearCar = () => {
    localStorage.clear()
}

export default { addToCart, getCart }