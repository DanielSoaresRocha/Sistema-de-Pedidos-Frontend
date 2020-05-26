import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom'

import api from '../../services/api'

import HeaderNavigate from '../../components/HeaderNavigate'
import Category from '../../components/Category'

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
        <HeaderNavigate name={"Produtos"} navigate={() => history.push(`/categories`)}>
            <div className="productsContainer">
                <div className="listProducts">
                    {products.map(product => (
                        <Category key={product.id} name={product.nome} />
                    ))}
                </div>
            </div>
        </HeaderNavigate>
    );
}

export default Products;