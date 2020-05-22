import axios from 'axios'

const cep = axios.create({
    baseURL: 'https://viacep.com.br/ws',
})

export default cep