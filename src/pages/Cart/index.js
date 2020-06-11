import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom'

import ItemCart from '../../components/ItemCart'
import cart from '../../utils/cart'

import './styles.css'
import Home from '../../components/Home'

function Cart () {
    let [cartItens, setCartItens] = useState([])
    const history = useHistory()

    useEffect(() => {
        setCartItens(cart.getCart)
    }, [])

    function addItem (item) {
        cart.addToCart(item)
        setCartItens(cart.getCart)
    }

    function removeItem (item) {
        cart.removeItem(item)
        setCartItens(cart.getCart)
    }

    function removeProduct (item) {
        cart.removeProduct(item)
        setCartItens(cart.getCart)
    }

    return (
        <Home name={'Cart'}>
            <div className="containerCart">
                <ul>
                    {cartItens.map(item => (
                        <li key={item.id}>
                            <ItemCart
                                name={item.nome}
                                price={item.preco}
                                qtd={item.qtd}
                                addClick={() => addItem(item)}
                                removeItemClick={() => removeItem(item)}
                                removeProductClick={() => removeProduct(item)}
                            />
                        </li>
                    ))}
                </ul>
                <div className="total">
                    <p>{`Total: ${cart.getTotalCart()}.00 R$`}</p>
                    <div className="buttons">
                        <button onClick={() => history.push('/categories')}>Continuar comprando</button>
                        <button onClick={() => history.push('/enderecos')}>Finalizar pedido</button>
                    </div>
                </div>
            </div>
        </Home>
    );
}

export default Cart;