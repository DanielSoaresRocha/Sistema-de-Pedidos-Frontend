import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import cep from '../../services/cep'

import './styles.css'

import { BsArrowLeftShort } from "react-icons/bs";


function Register () {
    const history = useHistory()
    const [bairro, setBairro] = useState('')
    const [logradouro, setLogradouro] = useState('')
    const [uf, setUf] = useState('')
    const [cidade, setCidade] = useState('')

    async function cepHandle (cepInput) {
        if (cepInput.length >= 8) {
            let { data } = await cep.get(`${cepInput}/json/`)
            setBairro(data.bairro)
            setLogradouro(data.logradouro)
            setUf(data.uf)
            setCidade(data.localidade)
        }
    }
    return (
        <div className="containerRegister">
            <header>
                <div className="back" onClick={() => history.push('/')}>
                    <BsArrowLeftShort size={50} color="000" />
                    <h1>SingUp</h1>
                </div>
            </header>

            <form>
                <section>
                    <input placeholder="Nome" />
                    <input placeholder="Email" type="email" />
                    <div className="typePeople">
                        <p>Tipo de pessoa: </p>
                        <div className="radios">
                            <input id="fisica" type="radio" value="fisica" name="gender" />
                            <label htmlFor="fisica" value="juridica"> Pessooa física </label>
                            <input id="juridica" type="radio" value="juridica" name="gender" />
                            <label htmlFor="juridica" value="juridica"> Pessoa jurídica</label>
                        </div>
                    </div>
                </section>
                <section>
                    <input placeholder="Cep" onChange={e => cepHandle(e.target.value)} />
                    <input placeholder="Logradouro" value={logradouro} disabled="true" />
                    <input placeholder="Estado" value={uf} disabled="true" />
                    <input placeholder="Cidade" value={cidade} disabled="true" />
                    <input placeholder="Bairro" value={bairro} disabled="true" />
                </section>

                <section>
                    <input placeholder="Número" type="number" />
                    <input placeholder="Complemento" />
                    <input placeholder="Telefone 1" />
                    <input placeholder="Telefone 2" />
                </section>
            </form>
        </div>
    );
}

export default Register;