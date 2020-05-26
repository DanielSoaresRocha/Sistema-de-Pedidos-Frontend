import React from 'react';


import './styles.css'

function Category (props) {
    return (
        <div className="containerCategory" onClick={props.click}>
            <img src="https://www.euax.com.br/wp-content/uploads/2019/04/escopo-de-projeto.png" alt="categoria" />
            <div className="nameCategory">
                <p>{props.name}</p>
            </div>
        </div>
    );
}

export default Category;