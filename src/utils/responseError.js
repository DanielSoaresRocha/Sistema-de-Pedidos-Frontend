const reponseError = (error) => {
    const numberError = Number(error.response.data.status)

    switch (numberError) {
        case 400:
            alert('Preencha os dados corretamente')
            break;
        case 401:
            alert('Credenciais inválidas')
            break;
        case 500:
            alert('Erro interno do servidor')
            break;
        default:
            alert(`desculpe, algo errado ocorreu. Error = ${numberError}`);
    }
}

export default reponseError