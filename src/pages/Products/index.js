import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom'

import api from '../../services/api'

import HeaderNavigate from '../../components/HeaderNavigate'

import './styles.css'

function Products () {
    const [products, setProducts] = useState([])
    const history = useHistory()
    let { id } = useParams()

    useEffect(() => {
        api.get(`/produtos?categorias=${id}`).then(response => {
            setProducts(response.data.content)
        })
    }, [id])

    return (
        <>
            <HeaderNavigate name={"Categorias"} navigate={() => history.push(`/categories`)} />
            {products.map(product => (
                <h1 key={product.id}>{product.nome}</h1>
            ))}
        </>
    );
}

export default Products;