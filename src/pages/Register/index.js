import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import cep from '../../services/cep'
import reponseError from '../../utils/responseError'
import './styles.css'

import HeaderNavigate from '../../components/HeaderNavigate'
import api from '../../services/api'

function Register () {
    const history = useHistory()
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [cpfOuCnpj, setCpfOuCnpj] = useState('')
    const [type, setType] = useState(1)
    const [password, setPassword] = useState('')

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
            setCep(cepInput.replace('-', ''))// retirar traço
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
        const data = {
            bairro,
            cep: cepText,
            cidade: cidade,
            complemento,
            cpfOuCnpj,
            email,
            logradouro,
            nome,
            numero,
            senha: password,
            telefone1,
            telefone2,
            telefone3,
            tipo: parseInt(type),
            estado: uf
        }
        api.post('/clientes', data).then(response => {
            console.log(response)
            history.push('/')
        }).catch(error => {
            console.log(error.response.data)
            reponseError(error)
        })
    }
    return (
        <div className="containerRegister">
            <HeaderNavigate name={"SingUp"} navigate={() => history.push('/')} />
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
                    <input
                        placeholder="CPF ou CNPJ"
                        value={cpfOuCnpj}
                        onChange={e => setCpfOuCnpj(e.target.value)}
                        required={true}
                    />

                    <div className="typePeople">
                        <label>Tipo de pessoa: </label>
                        <div className="radios">
                            <input
                                id="fisica"
                                type="radio"
                                value="1"
                                name="gender"
                                required={true}
                                onChange={e => setType(e.target.value)}
                            />
                            <label
                                htmlFor="fisica"
                                value="juridica">
                                Pessooa física
                            </label>
                            <input
                                id="juridica"
                                type="radio"
                                value="2"
                                name="gender"
                                required={true}
                                onChange={e => setType(e.target.value)}
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
                    <input
                        placeholder="Senha para logar"
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        required={true}
                    />
                </section>

                <div className="buttonContainer">
                    <button type="submit">Cadastrar</button>
                </div>
            </form>
        </div>
    );
}

export default Register;