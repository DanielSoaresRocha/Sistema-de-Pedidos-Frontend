import React from 'react'
import { useHistory } from 'react-router-dom'
import cep from '../../services/cep'

import './styles.css'

import { BsArrowLeftShort } from "react-icons/bs";


function Register () {
    const history = useHistory()

    async function cepHandle (cepInput) {
        if (cepInput.length >= 8) {
            console.log(cepInput)
            let { data } = await cep.get(`${cepInput}/json/`)
            console.log(data)
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
                    <input placeholder="Logradouro" />
                    <input placeholder="Número" type="number" />
                    <input placeholder="Complemento" />
                    <input placeholder="Bairro" />
                </section>

                <section>
                    <input placeholder="Estado" />
                    <input placeholder="Cidade" />
                    <input placeholder="Telefone 1" />
                    <input placeholder="Telefone 2" />
                </section>
            </form>
        </div>
    );
}

export default Register;