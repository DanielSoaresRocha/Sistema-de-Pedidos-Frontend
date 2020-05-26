import React from 'react';


import './styles.css'

function Product (props) {
    return (
        <div className="containerProduct" onClick={props.click}>
            <img src="https://www.euax.com.br/wp-content/uploads/2019/04/escopo-de-projeto.png" alt="categoria" />
            <div className="nameCategory">
                <p>{props.nameCategory}</p>
            </div>
        </div>
    );
}

export default Product;