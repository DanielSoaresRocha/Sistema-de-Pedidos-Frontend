const addToCart = (product) => {
    if (!product.qtd)//se não tiver quantidade coloca.
        product.qtd = 1

    let flag = 0;
    let cart = getCart().map(item => {
        if (item.id === product.id) {
            item.qtd++
            flag++// muda flag para saber que deve colocar um novo no array
        }
        return item
    })

    if (flag === 0)
        cart.push(product)// adiciona novo produto

    localStorage.setItem('cart', JSON.stringify(cart))
    console.log(JSON.parse(localStorage.getItem('cart')))
}

const getCart = () => {
    const cart = localStorage.getItem('cart')
    if (cart) {
        return JSON.parse(cart)
    } else {
        return []
    }
}

export default { addToCart, getCart }