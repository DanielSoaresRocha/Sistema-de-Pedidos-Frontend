import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai'

import './styles.css'

function Cart (props) {
    return (
        <div className="cart" onClick={props.click}>
            <div className="car">
                <AiOutlineShoppingCart color="FFF" />
            </div>
        </div>
    );
}

export default Cart;