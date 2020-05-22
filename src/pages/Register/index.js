import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import cep from '../../services/cep'

import './styles.css'

import { BsArrowLeftShort } from "react-icons/bs";


function Register () {
    const history = useHistory()
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')

    const [cepText, setCep] = useState('')
    const [bairro, setBairro] = useState('')
    const [logradouro, setLogradouro] = useState('')
    const [uf, setUf] = useState('')
    const [cidade, setCidade] = useState('')

    const [numero, setNumero] = useState('')
    const [complemento, setComplemento] = useState('')
    const [telefone1, setTelefone1] = useState('')
    const [telefone2, setTelefone2] = useState('')
    const [telefone3, setTelefone3] = useState('')

    async function cepHandle (cepInput) {
        try {
            setCep(cepInput)
            if (cepInput.length >= 8) {
                let { data } = await cep.get(`${cepInput}/json/`)
                setBairro(data.bairro)
                setLogradouro(data.logradouro)
                setUf(data.uf)
                setCidade(data.localidade)
            }
        } catch (e) {
            console.log('deu erro ' + e)
        }
    }

    function registerHandle (e) {
        e.preventDefault()
    }
    return (
        <div className="containerRegister">
            <header>
                <div className="back" onClick={() => history.push('/')}>
                    <BsArrowLeftShort size={50} color="000" />
                    <h1>SingUp</h1>
                </div>
            </header>

            <form onSubmit={registerHandle}>
                <section>
                    <p>Sobre você</p>
                    <input
                        placeholder="Nome"
                        value={nome}
                        onChange={e => setNome(e.target.value)}
                        required={true}
                    />
                    <input
                        placeholder="Email"
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required={true}
                    />
                    <div className="typePeople">
                        <label>Tipo de pessoa: </label>
                        <div className="radios">
                            <input
                                id="fisica"
                                type="radio"
                                value="fisica"
                                name="gender"
                                required={true}
                            />
                            <label
                                htmlFor="fisica"
                                value="juridica">
                                Pessooa física
                            </label>
                            <input
                                id="juridica"
                                type="radio"
                                value="juridica"
                                name="gender"
                                required={true}
                            />
                            <label
                                htmlFor="juridica"
                                value="juridica">
                                Pessoa jurídica</label>
                        </div>
                    </div>
                </section>

                <section>
                    <p>Endereço</p>
                    <div className="endereco">
                        <input
                            placeholder="Cep"
                            value={cepText}
                            onChange={e => cepHandle(e.target.value)}
                            required={true}
                        />
                        <input
                            placeholder="Número"
                            type="number"
                            value={numero}
                            onChange={e => setNumero(e.target.value)}
                            required={true}
                        />
                        <input
                            placeholder="Complemento"
                            value={complemento}
                            onChange={e => setComplemento(e.target.value)}
                            required={true}
                        />
                        <input
                            placeholder="Logradouro"
                            value={logradouro}
                            disabled={true} />
                        <input
                            placeholder="Estado"
                            value={uf}
                            disabled={true} />
                        <input
                            placeholder="Cidade"
                            value={cidade}
                            disabled={true} />
                        <input
                            placeholder="Bairro"
                            value={bairro}
                            disabled={true} />

                    </div>
                </section>

                <section>
                    <p>Contato</p>
                    <input
                        placeholder="Telefone 1"
                        value={telefone1}
                        onChange={e => setTelefone1(e.target.value)} />
                    <input
                        placeholder="Telefone 2"
                        value={telefone2}
                        onChange={e => setTelefone2(e.target.value)} />
                    <input
                        placeholder="Telefone 3"
                        value={telefone3}
                        onChange={e => setTelefone3(e.target.value)} />
                </section>

                <div className="buttonContainer">
                    <button type="submit">Cadastrar</button>
                </div>
            </form>
        </div>
    );
}

export default Register;