import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import api from '../../services/api'
import request from '../../utils/request'
import responseError from '../../utils/responseError'

import './styles.css'
import HeaderNavigate from '../../components/HeaderNavigate';

function GetAdress () {
    const [adresses, setAdresses] = useState([])
    const history = useHistory()

    useEffect(() => {
        const token = localStorage.getItem('token')
        const email = localStorage.getItem('email')
        api.get(`http://localhost:3333/clientes/email`, {
            params: {
                value: email
            },
            headers: {
                Authorization: token
            }
        }).then(response => {
            console.log(response)
            setAdresses(response.data.enderecos)
            request.setClient(response.data)
        }).catch(error => {
            responseError(error)
            history.push('/')
            alert('Sua sessão expirou.')
        })
    }, [history])

    function handleFormPayment (adress) {
        request.setAdressDelivery(adress)
        history.push('/form-payment')
    }

    return (
        <HeaderNavigate name={'Fechamento de pedido'} navigate={() => history.push('/cart')}>
            <div className='containerAdress'>
                <br />
                <hr />
                <span>Selecione um endereço</span>
                <ul>
                    {adresses.map(adress => (
                        <li onClick={() => handleFormPayment(adress)} key={adress.id}>
                            <p>{`${adress.logadouro}, ${adress.numero}`}</p>
                            <p>{`${adress.complemento}, CEP ${adress.cep}`}</p>
                            <p>{`${adress.bairro}, ${adress.cidade.estado.nome}`}</p>
                        </li>
                    ))}
                </ul>
            </div >
        </HeaderNavigate>
    )
}

export default GetAdress;