import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom'
import api from '../../services/api'
import cart from '../../utils/cart'

import HeaderNavigate from '../../components/HeaderNavigate'
import LittleCart from '../../components/LittleCart'

import './styles.css'

function ProductDetail () {
    const [product, setProduct] = useState({})
    const history = useHistory()
    let { id } = useParams()

    useEffect(() => {
        api.get(`/produtos/${id}`).then(response => {
            setProduct(response.data)
        })
    }, [id])

    function addToCarHandle () {
        cart.addToCart(product)
        history.push('/cart')
    }
    return (
        <HeaderNavigate name={"Detalhes"} navigate={() => history.goBack()}>
            <LittleCart click={() => history.push('/cart')} />
            <div className="detailContainer">
                <div className="card">
                    <img src={"https://blog.hotmart.com/blog/2019/12/17163328/cadastrar_produto-670x419.png"} alt={"Foto do produto"} />
                    <div className="information">
                        <p>{product.nome}</p>
                        <p>{`R$ ${product.preco}.00`}</p>
                        <button onClick={addToCarHandle}>Adicionar ao carrinho</button>
                    </div>
                </div>
            </div>
        </HeaderNavigate>
    );
}

export default ProductDetail;