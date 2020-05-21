import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Logon from './pages/Logon'
import Home from './pages/Home'

export default function Routes () {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/home" component={Home} />
                <Route path="/" component={Logon} />
            </Switch>
        </BrowserRouter>
    )
}