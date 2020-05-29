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
}

const removeProduct = (product) => {
    let cart = getCart().filter(item => item.id !== product.id)
    localStorage.setItem('cart', JSON.stringify(cart))
}

const removeItem = (product) => {
    let cart = getCart().map(item => {// retirar 1 item do carrinho
        if (item.id === product.id) {
            item.qtd--
        }
        return item
    })
    cart = cart.filter(item => item.qtd > 0)// se tiver algum com quantidade maior que zero irá remover
    localStorage.setItem('cart', JSON.stringify(cart))
}

const getCart = () => {
    const cart = localStorage.getItem('cart')
    if (cart) {
        return JSON.parse(cart)
    } else {
        return []
    }
}

const getTotalCart = () => {
    let total = 0
    getCart().map(item => {
        total = total + (item.preco * item.qtd)
        return 0
    })

    return total
}

export default { addToCart, getCart, getTotalCart, removeItem, removeProduct }