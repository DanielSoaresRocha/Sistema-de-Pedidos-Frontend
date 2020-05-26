import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Caregories from './pages/Categories'
import Logon from './pages/Logon'
import Home from './pages/Home'
import Register from './pages/Register'
import Profile from './pages/Profile'
import Cart from './pages/Cart'

export default function Routes () {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Logon} />
                <Route path="/home" component={Home} />
                <Route path="/register" component={Register} />
                <Route path="/profile" component={Profile} />
                <Route path="/categories" component={Caregories} />
                <Route path="/cart" component={Cart} />
            </Switch>
        </BrowserRouter>
    )
}