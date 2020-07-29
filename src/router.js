import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Caregories from './pages/Categories'
import Logon from './pages/Logon'
import Register from './pages/Register'
import Profile from './pages/Profile'
import Products from './pages/Products'
import ProductDetail from './pages/ProductDetail'
import Cart from './pages/Cart'
import GetAdress from './pages/GetAdress'
import FormPayment from './pages/FormPayment'
import CheckRequest from './pages/CheckRequest'

export default function Routes () {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Logon} />
                <Route path="/register" component={Register} />
                <Route path="/profile" component={Profile} />
                <Route path="/categories" component={Caregories} />
                <Route path="/products/:id" component={Products} />
                <Route path="/product-detail/:id" component={ProductDetail} />
                <Route path="/cart" component={Cart} />
                <Route path="/get-adress" component={GetAdress} />
                <Route path="/form-payment" component={FormPayment} />
                <Route path="/check-request/:qtdPlots" component={CheckRequest} />
            </Switch>
        </BrowserRouter>
    )
}