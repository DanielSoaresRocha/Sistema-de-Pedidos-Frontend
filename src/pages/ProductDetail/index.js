import React from 'react';
import { useHistory } from 'react-router-dom'

import HeaderNavigate from '../../components/HeaderNavigate'
import LittleCart from '../../components/LittleCart'
import './styles.css'

function ProductDetail () {
    const history = useHistory()

    return (
        <HeaderNavigate name={"Detalhes"} navigate={() => history.goBack()}>
            <LittleCart />
            <div className="detailContainer">
                <div className="card">
                    <img src={"https://blog.hotmart.com/blog/2019/12/17163328/cadastrar_produto-670x419.png"} alt={"Foto do produto"} />
                    <div className="information">
                        <p>Colcha</p>
                        <p>20 conto</p>
                        <button>Adicionar ao carrinho</button>
                    </div>
                </div>
            </div>
        </HeaderNavigate>
    );
}

export default ProductDetail;