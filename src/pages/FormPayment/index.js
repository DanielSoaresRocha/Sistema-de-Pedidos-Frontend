import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import request from '../../utils/request'

import './styles.css'
import HeaderNavigate from '../../components/HeaderNavigate';

function FormPayment () {
    const history = useHistory()
    const [billet, setBillet] = useState(false)

    function handleFinish (e) {
        e.preventDefault()

        const data = {
            cliente: request.getClient(),
            enderecoDeEntrega: request.getAdressDelivery(),
        }

        console.log(data)
    }

    return (
        <HeaderNavigate name={'Forma de pagamento'} navigate={() => history.push('/get-adress')}>
            <div className='containerPayment'>
                <br />
                <span>Tipo de pagamento</span>
                <form onSubmit={handleFinish}>
                    <div className='selectPayment'>
                        <input
                            id='cartao'
                            value='cartao'
                            name="gender"
                            type="radio"
                            onChange={() => setBillet(false)}
                            required={true}
                        />
                        <label
                            htmlFor='cartao'>
                            Pagamento com cartão
                         </label>
                        <input
                            id='boleto'
                            value='boleto'
                            name="gender"
                            type="radio"
                            onChange={() => setBillet(true)}
                            required={true}
                        />
                        <label
                            htmlFor='boleto'>
                            Pagamento com boleto
                        </label>
                    </div>
                    <div className='numPlots'>
                        {billet === true ? (
                            <>
                                <h3>Nº parcelas no boleto</h3>
                                <select>
                                    <option value='1'>1</option>
                                    <option value='2'>2</option>
                                    <option value='3'>3</option>
                                    <option value='4'>4</option>
                                    <option value='5'>5</option>
                                    <option value='6'>6</option>
                                    <option value='7'>7</option>
                                    <option value='8'>8</option>
                                    <option value='9'>9</option>
                                    <option value='10'>10</option>
                                </select>
                            </>
                        ) : (<div />)}
                    </div>
                    <button type='submit'>Próximo</button>
                </form>
            </div>
        </HeaderNavigate>
    )
}

export default FormPayment;