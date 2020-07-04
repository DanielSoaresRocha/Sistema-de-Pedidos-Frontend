import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import cart from '../../utils/cart'
import request from '../../utils/request'

import './styles.css'
import Home from '../../components/Home';

function CheckRequest () {
    // eslint-disable-next-line
    const { qtdBillets } = useParams()

    useEffect(() => {
        console.log(request.getAdressDelivery())
    })

    return (
        <Home name={'Confira seu pedido'}>
            <div className='checkContainer'>
                <section>
                    <h1>Itens do pedido</h1>
                    <ul>
                        {cart.getCart().map(item => (
                            <li key={item.id}>
                                <img
                                    src={'https://comps.canstockphoto.com.br/produto-engrenagem-s%C3%ADmbolo-cardbox-desenho_csp53091492.jpg'}
                                    alt={'item do carrinho'}
                                />
                                <div className='infoItem'>
                                    <p>{item.nome}</p>
                                    <p>{`$${item.preco}`}</p>
                                    <p>{item.qtd}</p>
                                </div>
                                <div className='price'>{`$${item.preco * item.qtd}`}</div>
                            </li>
                        ))}
                        <h1>Total: {`$${cart.getTotalCart()}`}</h1>
                    </ul>
                </section>
                <section>
                    <h1>Cliente</h1>
                    <p>{request.getClient().nome}</p>
                    <p>{request.getClient().email}</p>

                    <h1>Endereço de entrega</h1>
                    <p>{`${request.getAdressDelivery().logadouro}, ${request.getAdressDelivery().numero}`}</p>
                    <p>{`${request.getAdressDelivery().complemento} CEP ${request.getAdressDelivery().cep}`}</p>
                    <p>{`${request.getAdressDelivery().bairro}, ${request.getAdressDelivery().cidade.estado.nome}`}</p>
                </section>
            </div>
        </Home>
    )
}

export default CheckRequest;