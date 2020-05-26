import React, { useEffect, useState } from 'react';
import api from '../../services/api'

import './styles.css'

import LittleCart from '../../components/LittleCart'
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

    async function productsHandle (id) {
        let { data } = await api.get(`/produtos?categorias=${id}`)
        console.log(data)
    }

    return (
        <Home>
            <LittleCart />
            <div className="listCategories">
                {categories.map(category => (
                    <Category click={() => productsHandle(category.id)} key={category.id} nameCategory={category.nome} />
                ))}
            </div>
        </Home>
    );
}

export default Categories;