import React from 'react'
import { useParams } from 'react-router-dom'

import './styles.css'
import Home from '../../components/Home';

function CheckRequest () {
    const { qtdBillets } = useParams()
    return (
        <Home name={'Confira seu pedido'}>
            <h1>eae men{qtdBillets}</h1>
        </Home>
    )
}

export default CheckRequest;