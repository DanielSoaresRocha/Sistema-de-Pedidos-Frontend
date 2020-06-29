import React from 'react'
import { useHistory } from 'react-router-dom'

import './styles.css'
import HeaderNavigate from '../../components/HeaderNavigate';

function FormPayment () {
    const history = useHistory()
    return (
        <HeaderNavigate name={'Forma de pagamento'} navigate={() => history.push('/get-adress')}>
            <div className='containerPayment'>
                <br />
                <span>Selecione uma forma de pagamento</span>
            </div>
        </HeaderNavigate>
    )
}

export default FormPayment;