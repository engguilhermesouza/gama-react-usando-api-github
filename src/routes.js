import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Repositorios from './pages/Home/Repositorios/Repositorios';
import Home from './pages/Home/Home/Home';

export default function Routes() {
    return (
     <BrowserRouter>
        <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/repositorios' component={Repositorios}/>
        </Switch>
     </BrowserRouter>
    )
}