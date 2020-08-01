import React from 'react'
import { useParams, useHistory } from 'react-router-dom'
import api from '../../services/api'

import cart from '../../utils/cart'
import request from '../../utils/request'
import responseError from '../../utils/responseError'

import './styles.css'
import Home from '../../components/Home';

function CheckRequest () {
    const history = useHistory()
    const { qtdPlots } = useParams()

    function handleRequest () {
        const itens = cart.getCart().map(item => {
            return {
                quantidade: item.qtd,
                produto: { id: item.id }
            }
        })

        const data = {
            cliente: { id: request.getClient().id },
            enderecoDeEntrega: request.getAdressDelivery(),
            pagamento: {
                numeroDeParcelas: parseInt(qtdPlots),
                '@type': qtdPlots === '0' ? 'pagamentoComBoleto' : 'pagamentoComCartao'
            },
            itens
        }

        const token = localStorage.getItem('token')
        api.post('/pedidos', data, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: token
            }
        }).then(response => {
            console.log(response)
        }).catch(error => {
            responseError(error)
        })

        console.log(data)
    }

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
                    </ul>
                    <h1>Total: {`$${cart.getTotalCart()}`}</h1>
                </section>
                <section>
                    <h1>Cliente</h1>
                    <p>{request.getClient().nome}</p>
                    <p>{request.getClient().email}</p>

                    <h1>Endereço de entrega</h1>
                    <p>{`${request.getAdressDelivery().logadouro}, ${request.getAdressDelivery().numero}`}</p>
                    <p>{`${request.getAdressDelivery().complemento} CEP ${request.getAdressDelivery().cep}`}</p>
                    <p>{`${request.getAdressDelivery().bairro}, ${request.getAdressDelivery().cidade.estado.nome}`}</p>

                    <h1>Pagamento</h1>
                    {qtdPlots === '0' ?
                        <p>Pagamento com boleto</p>
                        :
                        (
                            <>
                                <p>Pagamento com cartão</p>
                                <p>{`${qtdPlots} parcelas`}</p>
                            </>
                        )
                    }
                </section>

                <div className='buttons'>
                    <button onClick={() => handleRequest()}>Confirmar pedido</button>
                    <button onClick={() => history.goBack()}>voltar</button>
                </div>
            </div>
        </Home>
    )
}

export default CheckRequest;