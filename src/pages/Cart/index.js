import React, { useEffect, useState } from 'react';

import ItemCart from '../../components/ItemCart'
import cart from '../../data/cart'

import './styles.css'
import Home from '../../components/Home'

function Cart () {
    let [cartItens, setCartItens] = useState([])

    useEffect(() => {
        setCartItens(cart.getCart)
    }, [])

    function addItem (item) {
        cart.addToCart(item)
        setCartItens(cart.getCart)
    }

    function removeItem (item) {
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
                                removeClick={() => removeItem(item)}
                            />
                        </li>
                    ))}
                </ul>
                <div className="total">
                    <p>{`Total: ${cart.getTotalCart()}.00 R$`}</p>
                    <button>Continuar comprando</button>
                </div>
            </div>
        </Home>
    );
}

export default Cart;