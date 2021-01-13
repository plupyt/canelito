import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'

import Header from '../components/Header.js'
import Footer from '../components/Footer.js'
import PaginaInicio from '../components/PaginaInicio.js'
import ConoceMas from '../components/ConoceMas.js'
import Contactame from '../components/Contactame.js'
import AdoptaUnLomito from '../components/AdoptaUnLomito.js'
import Producto from '../components/Producto.js'
import NotFoundPage from '../components/NotFoundPage.js'

import '../styles/normalize.css'
import '../styles/estilos.css'
import '../styles/grid.css'
import '../styles/mobile.css'
import '../styles/animations.css'

export const history = createHistory()

const AppRouter =  () => (
    <Router history={history} >
        <Header />
        <div>
            <Switch>
                <Route path='/' component={PaginaInicio} exact={true} />
                <Route path='/adoptaUnLomito' component={AdoptaUnLomito} />
                <Route path='/conoceMas' component={ConoceMas} />
                <Route path='/contactame' component={Contactame} />
                <Route path='/producto' component={Producto} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
        <Footer />
    </Router>
)

export default AppRouter