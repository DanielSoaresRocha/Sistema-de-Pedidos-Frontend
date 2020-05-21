import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai'

import './styles.css'

function Cart (props) {
    return (
        <div className="cart">
            <div className="car">
                <AiOutlineShoppingCart size={50} color="#FFF" />
            </div>
        </div>
    );
}

export default Cart;