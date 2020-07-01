const request = {
    setClient: client => localStorage.setItem("client", JSON.stringify(client)),
    setAdressDelivery: adress => localStorage.setItem("adressDelivery", JSON.stringify(adress)),
    getClient: () => JSON.parse(localStorage.getItem("client")),
    getAdressDelivery: () => JSON.parse(localStorage.getItem("adressDelivery"))

}

export default request