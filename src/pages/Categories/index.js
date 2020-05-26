import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom'

import api from '../../services/api'

import './styles.css'

import LittleCart from '../../components/LittleCart'
import Home from '../Home'
import Category from '../../components/Category'

function Categories () {
    const [categories, setCategories] = useState([])
    const history = useHistory()

    useEffect(() => {
        api.get('/categorias').then(response => {
            setCategories(response.data)
        })
    }, [])

    async function productsHandle (id) {
        history.push(`/products/${id}`)
    }

    return (
        <Home>
            <LittleCart />
            <div className="listCategories">
                {categories.map(category => (
                    <Category click={() => productsHandle(category.id)} key={category.id} name={category.nome} />
                ))}
            </div>
        </Home>
    );
}

export default Categories;