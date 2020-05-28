import React from 'react';
import { FaTrash } from "react-icons/fa";

import './styles.css'

function ItemCart (props) {
    return (
        <div className="productCart">
            <img
                src={'https://comps.canstockphoto.com.br/produto-engrenagem-s%C3%ADmbolo-cardbox-desenho_csp53091492.jpg'}
                alt={'item do carrinho'}
            />
            <div className="information">
                <p>{props.name}</p>
                <p>{props.price}</p>
                <div className="modifyQtd">
                    <p>-</p>
                    <p>{props.qtd}</p>
                    <p>+</p>
                </div>
            </div>
            <div className="trash">
                <div className="icon">
                    <FaTrash />
                </div>
            </div>
        </div>
    );
}

export default ItemCart;