import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom'

import api from '../../services/api'

import './styles.css'

import LittleCart from '../../components/LittleCart'
import Home from '../../components/Home'
import Category from '../../components/Category'

function Categories () {
    const [categories, setCategories] = useState([])
    const history = useHistory()

    useEffect(() => {
        api.get('/categorias').then(response => {
            setCategories(response.data)
        })
    }, [])

    function productsHandle (id) {
        history.push(`/products/${id}`)
    }

    return (
        <Home name={'Categorias'}>
            <LittleCart click={() => history.push('/cart')} />
            <div className="listCategories">
                {categories.map(category => (
                    <Category click={() => productsHandle(category.id)} key={category.id} name={category.nome} />
                ))}
            </div>
        </Home>
    );
}

export default Categories;