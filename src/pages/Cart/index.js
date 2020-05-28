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
    return (
        <Home name={'Cart'}>
            <div className="containerCart">
                <ul>
                    {cartItens.map(item => (
                        <li key={item.id}><ItemCart name={item.nome} price={item.preco} qtd={item.qtd} /></li>
                    ))}
                </ul>
            </div>
        </Home>
    );
}

export default Cart;