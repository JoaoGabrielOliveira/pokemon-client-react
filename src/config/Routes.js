import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../paginas/Home/Home.jsx';
import Dashboard from '../paginas/deshbord/Dashboard';
import Pokemon from '../paginas/pokemon/Pokemon';
import Noticia from '../paginas/Noticia/index';
import Cont from '../paginas/Contatos/cont.jsx';

export class Routes extends Component {
    render() {
        return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/pokemons" component={Dashboard} />
            <Route exact path="/pokemon/:pokemonIndex" component={Pokemon} />
            <Route exact path="/noticia" component={Noticia} />
            <Route exact path="/contato" component={Cont} />
        </Switch>
        )
    }
}