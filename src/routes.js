import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { Home } from './pages/Home/Home'
import { Info } from './pages/Info/Info'
import { Main } from './pages/Main/Main'

export const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/home" exact>
                    <Home />
                </Route>
                <Route path="/info" exact>
                    <Info />
                </Route>
                <Route path="/main" exact>
                    <Main />
                </Route>
                <Redirect to="/home" />
            </Switch>
        </BrowserRouter>
    )
}

export default Router