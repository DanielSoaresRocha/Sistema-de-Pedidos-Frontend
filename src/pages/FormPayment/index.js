import React from 'react'
import { useHistory } from 'react-router-dom'

import './styles.css'
import HeaderNavigate from '../../components/HeaderNavigate';

function FormPayment () {
    const history = useHistory()

    let billet = true
    return (
        <HeaderNavigate name={'Forma de pagamento'} navigate={() => history.push('/get-adress')}>
            <div className='containerPayment'>
                <br />
                <span>Selecione uma forma de pagamento</span>
                <div className='selectPayment'>
                    <label
                        htmlFor='cartao'>
                        Pagamento com cartão
                         </label>
                    <input
                        id='cartao'
                        value='cartao'
                        name="gender"
                        type="radio"
                    />
                    <label
                        htmlFor='boleto'>
                        Pagamento com boleto
                        </label>
                    <input
                        id='boleto'
                        value='boleto'
                        name="gender"
                        type="radio"
                    />
                </div>
                <div className='numPlots'>
                    {billet === true ? (
                        <select>
                            <option value='1'>1</option>
                            <option value='2'>2</option>
                        </select>
                    ) : console.log('ok')}
                </div>
            </div>
        </HeaderNavigate>
    )
}

export default FormPayment;