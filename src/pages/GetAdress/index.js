import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import api from '../../services/api'

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
        }).catch(error => {
            console.log(error)
            history.push('/')
            alert('Sua sessão expirou')
        })
    }, [history])

    return (
        <HeaderNavigate name={'Fechamento de pedido'} navigate={() => history.push('/cart')}>
            <div className='containerAdress'>
                <br />
                <hr styles="border-top: 1px solid red" />
                <h1>Selecione um endereço</h1>
                <ul>
                    {adresses.map(adress => (
                        <li key={adress.id}>
                            {`${adress.logadouro}, ${adress.numero}`}
                            <br />
                            {`${adress.complemento}, CEP ${adress.cep}`}
                            <br />
                            {`${adress.bairro}, ${adress.cidade.estado.nome}`}
                        </li>
                    ))}
                </ul>
            </div>
        </HeaderNavigate>
    );
}

export default GetAdress;