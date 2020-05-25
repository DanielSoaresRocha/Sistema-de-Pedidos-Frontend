import React, { useEffect, useState } from 'react';
import api from '../../services/api'

import './styles.css'

import Cart from '../../components/Cart'
import Home from '../Home'
import Category from '../../components/Category'

function Categories () {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        api.get('/categorias').then(response => {
            setCategories(response.data)
            console.log(`----------------${response.data[0].nome}`)
        })
    }, [])

    return (
        <Home>
            <Cart />
            <div className="listCategories">
                {categories.map(category => (
                    <Category key={category.id} nameCategory={category.nome} />
                ))}
            </div>
        </Home>
    );
}

export default Categories;